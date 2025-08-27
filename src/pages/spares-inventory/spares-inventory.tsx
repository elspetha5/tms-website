import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import Button from "../../library/button/button";
import Message from "../../components/message/message";
import Modal from "../../library/modal/modal";
import Section from "../../components/section/section";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner";
import Collapsible, {
  CollapsibleItem,
  CollapsibleStyle,
} from "../../library/collapsible/collapsible";

import { getSparesInventory } from "../../shared/queries";
import { useAuth } from "../../shared/contexts/auth-context";
import { UseAuth } from "../../shared/types";
import { getTenantId } from "../../shared/utils";
import useForm, { FormField } from "../../shared/hooks/use-form/use-form";

import "./spares-inventory.scss";

const initSparesInventoryRequestFields: FormField[] = [
  {
    name: "Requested by Name",
    placeholder: "Your name",
    isRequired: true,
  },
  {
    name: "Requested by Email",
    placeholder: "Your email",
    isRequired: true,
    type: "email",
  },
  {
    name: "Requested for Name",
    placeholder: "Who is this device for?",
    isRequired: true,
  },
  {
    name: "Requested for Email",
    placeholder: "Email address for person receiving device",
    isRequired: true,
    type: "email",
  },
  {
    name: "Recieve by Date",
    placeholder: "When do you want to get this device?",
    isRequired: true,
    // type: 'date' TODO: MAKE THIS WORK FOR A SELECT DATE
  },
  {
    name: "Is this replacing a device?",
    label: "Does phone number need to be transferred to new device?",
    placeholder: "",
    isRequired: true,
    selectOptions: ["Yes", "No"],
  },
  {
    name: "Shipping Address",
    placeholder: "",
    isRequired: true,
    isTextArea: true,
  },
  {
    name: "Notes",
    placeholder: "Anything else needed?",
    isRequired: false,
    isTextArea: true,
  },
];

function SparesInventory() {
  const { currentUser } = useAuth() as UseAuth;
  // const [sparesData, setSparesData] = useState<[]>();
  const [sparesArr, setSparesArr] = useState<CollapsibleItem[]>();
  const [modalInfo, setModalInfo] = useState();
  const {
    formFields,
    handleBlur,
    handleChange,
    handleKeyDown,
    handleSheetSubmit,
    isError,
    isSubmitting,
    resetForm,
    resetFormFields,
    submitStatus,
    submitMessage,
  } = useForm(
    initSparesInventoryRequestFields,
    import.meta.env.VITE_GOOGLE_SHEET_SPARES_INVENTORY_REQUEST_URL,
    {
      Model: modalInfo?.["Device model"],
      "Phone #": modalInfo?.["Device Ph#"],
      "SN#": modalInfo?.["SN#"],
      "IMEI#": modalInfo?.["IMEI#"],
      tenantId: getTenantId(currentUser),
    }
  );

  async function getSpares() {
    console.log("called");
    const data = await getSparesInventory(getTenantId(currentUser));
    if (data) {
      const currSparesArr: CollapsibleItem[] = [];

      data.forEach((spare) => {
        const deviceAvailability = spare["Device currently available?"];
        currSparesArr.push({
          content: (
            <div className="spares-device-info-container">
              {Object.keys(spare).map((key) => {
                if (key === "Device model") {
                  return;
                } else {
                  return (
                    <div key={key}>
                      <b>{key}:</b> {spare[key]}
                    </div>
                  );
                }
              })}
              {deviceAvailability === "Yes" && (
                <Button
                  className="spares-request-button"
                  isPrimary
                  onClick={() => setModalInfo(spare)}
                >
                  Request Device
                </Button>
              )}
            </div>
          ),
          height: "0px",
          id: spare["SN#"],
          isActive: false,
          label: (
            <span>
              <FontAwesomeIcon
                className={`spares-device-icon-${getIconColor(
                  deviceAvailability
                )}`}
                icon={
                  spare["Device type"] === "Tablet"
                    ? faTabletScreenButton
                    : faMobileScreen
                }
              />
              <span className="spares-label-text">{spare["Device model"]}</span>
            </span>
          ),
        });
      });

      setSparesArr(currSparesArr);
    }
  }

  function getIconColor(status) {
    switch (status) {
      case "Yes":
        return "green";

      case "No":
        return "grey";

      case "Requested":
        return "blue";
    }
  }

  function closeModal() {
    getSpares();
    resetFormFields();
    setModalInfo(undefined);

    setTimeout(() => {
      resetForm();
    }, 30 * 1000);
  }

  useEffect(() => {
    if (currentUser) {
      getSpares();
    }
  }, [currentUser]);

  useEffect(() => {
    if (submitStatus !== null && Boolean(modalInfo)) {
      closeModal();
    }
  }, [submitStatus, modalInfo]);

  useEffect(() => {
    console.log(sparesArr);
  }, [sparesArr]);

  return (
    <Section className="spares-section-container" title="Spares Inventory">
      {submitStatus && submitMessage && (
        <Message type={submitStatus} message={submitMessage} />
      )}
      <div className="spares-collapsible-container">
        {sparesArr && sparesArr.length > 0 ? (
          <Collapsible arr={sparesArr} style={CollapsibleStyle.small} />
        ) : (
          <LoadingSpinner />
        )}
      </div>

      <Modal open={Boolean(modalInfo)} onClose={closeModal}>
        {modalInfo && (
          <div className="spares-modal-container">
            <div className="spares-modal-header">
              Requesting <b>{modalInfo["Device model"]}</b>
            </div>
            <div className="spares-modal-subheader">
              <div>
                <b>Phone #:</b> {modalInfo["Device Ph#"]}
              </div>
              <div>
                <b>SN#:</b> {modalInfo["SN#"]}
              </div>
              <div>
                <b>IMEI#:</b> {modalInfo["IMEI#"]}
              </div>
            </div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="form-group-container">
                <div className="form-group">
                  {formFields.map((field, i) => {
                    if (i < 2)
                      return (
                        <TextField
                          disabled={isSubmitting}
                          error={field.error}
                          fullWidth
                          helperText={field.errorMessage || field.label}
                          id={field.name}
                          key={field.name}
                          label={field.name}
                          multiline={field.isTextArea}
                          name={field.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onKeyDown={handleKeyDown}
                          placeholder={field.placeholder}
                          required={field.isRequired}
                          rows={5}
                          select={Boolean(field.selectOptions)}
                          type={field.type || "text"}
                          value={field.value}
                          variant="outlined"
                        >
                          {Boolean(field.selectOptions) &&
                            field.selectOptions.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                        </TextField>
                      );
                  })}
                </div>
                <div className="form-group">
                  {formFields.map((field, i) => {
                    if (i === 2 || i === 3)
                      return (
                        <TextField
                          disabled={isSubmitting}
                          error={field.error}
                          fullWidth
                          helperText={field.errorMessage || field.label}
                          id={field.name}
                          key={field.name}
                          label={field.name}
                          multiline={field.isTextArea}
                          name={field.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onKeyDown={handleKeyDown}
                          placeholder={field.placeholder}
                          required={field.isRequired}
                          rows={5}
                          select={Boolean(field.selectOptions)}
                          type={field.type || "text"}
                          value={field.value}
                          variant="outlined"
                        >
                          {Boolean(field.selectOptions) &&
                            field.selectOptions.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                        </TextField>
                      );
                  })}
                </div>
                <div className="form-group">
                  {formFields.map((field, i) => {
                    if (i === 4 || i === 5)
                      return (
                        <TextField
                          disabled={isSubmitting}
                          error={field.error}
                          fullWidth
                          helperText={field.errorMessage || field.label}
                          id={field.name}
                          key={field.name}
                          label={field.name}
                          multiline={field.isTextArea}
                          name={field.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onKeyDown={handleKeyDown}
                          placeholder={field.placeholder}
                          required={field.isRequired}
                          rows={5}
                          select={Boolean(field.selectOptions)}
                          type={field.type || "text"}
                          value={field.value}
                          variant="outlined"
                        >
                          {Boolean(field.selectOptions) &&
                            field.selectOptions.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                        </TextField>
                      );
                  })}
                </div>
                <div className="form-group">
                  {formFields.map((field, i) => {
                    if (i === 6 || i === 7)
                      return (
                        <TextField
                          disabled={isSubmitting}
                          error={field.error}
                          fullWidth
                          helperText={field.errorMessage || field.label}
                          id={field.name}
                          key={field.name}
                          label={field.name}
                          multiline={field.isTextArea}
                          name={field.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onKeyDown={handleKeyDown}
                          placeholder={field.placeholder}
                          required={field.isRequired}
                          rows={5}
                          select={Boolean(field.selectOptions)}
                          type={field.type || "text"}
                          value={field.value}
                          variant="outlined"
                        >
                          {Boolean(field.selectOptions) &&
                            field.selectOptions.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                        </TextField>
                      );
                  })}
                </div>
              </div>
            </Box>
            <Button
              type="submit"
              className="form-btn"
              isPrimary
              isDisabled={isSubmitting || isError}
              onClick={(e) => {
                handleSheetSubmit(e);
                setSparesArr(undefined);
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        )}
      </Modal>
    </Section>
  );
}

export default SparesInventory;
