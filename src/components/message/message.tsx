import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons/faCircleExclamation";

import "./message.scss";

interface MessageProps {
  className?: string;
  type: "info" | "warning" | "error" | "success";
  message: string;
}

function Message(props: MessageProps) {
  const { className: classNameProp, type, message } = props;
  const msgRef = useRef<HTMLDivElement>(null);
  let icon: any = faCircleInfo;
  let className = "info";
  if (type === "warning") {
    className = "warning";
    icon = faTriangleExclamation;
  }
  if (type === "error") {
    className = "error";
    icon = faCircleExclamation;
  }
  if (type === "success") {
    className = "success";
    icon = faCircleCheck;
  }

  useEffect(() => {
    if (msgRef.current) {
      msgRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <div
      ref={msgRef}
      className={`message message-${className} ${classNameProp}`}
    >
      <FontAwesomeIcon className="message-icon" icon={icon} />
      <div>{message}</div>
    </div>
  );
}

export default Message;
