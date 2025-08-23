import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../library/button/button";
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
  },
  {
    name: "Recieve by Date",
    placeholder: "When do you want to get this device?",
    isRequired: true,
  },
  {
    name: "Shipping Address",
    placeholder: "",
    isRequired: true,
    isTextArea: true,
  },
  {
    name: "Is this replacing a device?",
    label: "Does phone number need to be transferred to new device?",
    placeholder: "",
    isRequired: true,
    selectOptions: ["Yes", "No"],
  },
  {
    name: "Notes",
    placeholder: "Anything else needed?",
    isRequired: true,
    isTextArea: true,
  },
];

function SparesInventory() {
  const { currentUser } = useAuth() as UseAuth;
  const [sparesData, setSparesData] = useState<[]>();
  const [sparesArr, setSparesArr] = useState<CollapsibleItem[]>();
  const [modalInfo, setModalInfo] = useState();

  async function getSpares() {
    const data = await getSparesInventory(getTenantId(currentUser));
    if (data) {
      setSparesData(data);
      console.log(data);
    } else {
      console.log("no data");
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

  useEffect(() => {
    if (currentUser) {
      getSpares();
    }
  }, [currentUser]);

  useEffect(() => {
    if (sparesData) {
      const currSparesArr: CollapsibleItem[] = [];

      sparesData.forEach((spare) => {
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
  }, [sparesData]);

  return (
    <Section title="Spares Inventory">
      {sparesArr && sparesArr.length > 0 ? (
        <div className="spares-collapsible-container">
          <Collapsible arr={sparesArr} style={CollapsibleStyle.small} />
        </div>
      ) : (
        <LoadingSpinner />
      )}

      <Modal open={Boolean(modalInfo)} onClose={() => setModalInfo(undefined)}>
        {modalInfo && (
          <div>
            <div>
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
          </div>
        )}
      </Modal>
    </Section>
  );
}

export default SparesInventory;
