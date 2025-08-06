import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";

import "./collapsible.scss";

export interface CollapsibleItem {
  content: any;
  height: string;
  id: string;
  isActive: boolean;
  label: string;
}

interface CollapsibleProps {
  arr: CollapsibleItem[];
}

function Collapsible(props: CollapsibleProps) {
  const { arr: propsArr } = props;
  const [arr, setArr] = useState(propsArr);
  const itemRefs = useRef(new Map());

  function setActiveItem(index) {
    setArr((prevArr) => {
      return prevArr.map((item, i) => {
        if (index === i) {
          const newIsActive = !item.isActive;
          let newHeight = "0px";
          if (newIsActive) {
            const contentElement = itemRefs.current.get(item.id);
            if (contentElement) {
              newHeight = `${contentElement.scrollHeight}px`;
            }
          }
          return { ...item, isActive: newIsActive, height: newHeight };
        } else {
          return { ...item, isActive: false, height: "0px" };
        }
      });
    });
  }

  return (
    <>
      {arr.map((item, i) => (
        <div key={item.id} className="collapsible-container">
          <div className="collapsible-header" onClick={() => setActiveItem(i)}>
            <div className="collapsible-label">{item.label}</div>
            <FontAwesomeIcon icon={item.isActive ? faMinus : faPlus} />
          </div>
          <div
            className="collapsible-content"
            ref={(el) => {
              if (el) {
                itemRefs.current.set(item.id, el);
              } else {
                itemRefs.current.delete(item.id);
              }
            }}
            style={{ maxHeight: item.height }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </>
  );
}

export default Collapsible;
