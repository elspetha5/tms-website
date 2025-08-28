import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";

import Button from "../../library/button/button";
import FormFieldInput from "../../library/form-field-input/form-field-input";
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
import { states } from "../../shared/constants";

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
    name: "Ship by Date",
    label: "TMS will confirm shipping date",
    isRequired: true,
    type: "date",
  },
  {
    name: "Is this replacing a device?",
    label: "Does phone number need to be transferred to new device?",
    placeholder: "",
    isRequired: true,
    selectOptions: ["Yes", "No"],
  },
  {
    name: "Address line 1",
    placeholder: "",
    isRequired: true,
    type: "address",
  },
  {
    name: "Address line 2",
    placeholder: "",
    isRequired: false,
    type: "address",
  },
  {
    name: "City",
    placeholder: "",
    isRequired: true,
    type: "address",
  },
  {
    name: "State",
    placeholder: "",
    isRequired: true,
    selectOptions: states,
    type: "address",
  },
  {
    name: "Zip",
    placeholder: "",
    isRequired: true,
    type: "address",
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
    if (submitStatus === "success" && Boolean(modalInfo)) {
      closeModal();
    }
  }, [submitStatus, modalInfo]);

  return (
    <Section className="spares-section-container" title="Spares Inventory">
      {submitStatus && submitStatus === "success" && submitMessage && (
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
        {submitStatus && submitStatus !== "success" && submitMessage && (
          <Message
            className="spares-error-message"
            type={submitStatus}
            message={submitMessage}
          />
        )}
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
                        <FormFieldInput
                          {...field}
                          key={field.name}
                          isSubmitting={isSubmitting}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          handleKeyDown={handleKeyDown}
                        />
                      );
                  })}
                </div>
                <div className="form-group">
                  {formFields.map((field, i) => {
                    if (i === 2 || i === 3)
                      return (
                        <FormFieldInput
                          {...field}
                          key={field.name}
                          isSubmitting={isSubmitting}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          handleKeyDown={handleKeyDown}
                        />
                      );
                  })}
                </div>
                <div className="form-group">
                  {formFields.map((field, i) => {
                    if (i === 4 || i === 5)
                      return (
                        <FormFieldInput
                          {...field}
                          key={field.name}
                          isSubmitting={isSubmitting}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          handleKeyDown={handleKeyDown}
                        />
                      );
                  })}
                </div>
                <div className="form-group">
                  <div className="spares-form-label">Shipping Address:</div>
                  {formFields.map((field, i) => {
                    if (i === 6 || i === 7)
                      return (
                        <FormFieldInput
                          {...field}
                          key={field.name}
                          isSubmitting={isSubmitting}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          handleKeyDown={handleKeyDown}
                        />
                      );
                  })}
                </div>
                <div className="form-group">
                  {formFields.map((field, i) => {
                    if (i === 8 || i === 9)
                      return (
                        <FormFieldInput
                          {...field}
                          key={field.name}
                          isSubmitting={isSubmitting}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          handleKeyDown={handleKeyDown}
                        />
                      );
                  })}
                </div>
                <div className="form-group spares-zip-code">
                  {formFields.map((field, i) => {
                    if (i === 10)
                      return (
                        <FormFieldInput
                          {...field}
                          key={field.name}
                          isSubmitting={isSubmitting}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          handleKeyDown={handleKeyDown}
                        />
                      );
                  })}
                </div>
                <div className="form-group">
                  {formFields.map((field, i) => {
                    if (i === 11)
                      return (
                        <FormFieldInput
                          {...field}
                          key={field.name}
                          isSubmitting={isSubmitting}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          handleKeyDown={handleKeyDown}
                        />
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
