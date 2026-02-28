import { ElementType, ReactNode, SyntheticEvent } from "react";
import { Link } from "react-router-dom";

import "./button.scss";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  icon?: ElementType;
  isBlack?: boolean;
  isDisabled?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
  onClick?: (event: SyntheticEvent) => void;
  to?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

function Button(props: ButtonProps) {
  const {
    children,
    className: classNameProp,
    href,
    icon: Icon,
    isBlack,
    isDisabled,
    isPrimary,
    isSecondary,
    isTertiary,
    onClick,
    to,
    type,
  } = props;
  let className = "";
  if (isPrimary) className = "btn-primary";
  if (isSecondary) className = "btn-secondary";
  if (isTertiary) className = "btn-tertiary";
  if (isDisabled) className = `${className}-disabled`;
  if (isBlack) className = "btn-black";
  let button;

  if (to) {
    button = (
      <Link
        to={to}
        className={`btn ${className} ${classNameProp}`}
        onClick={onClick}
      >
        {Icon && <Icon />}
        {children && children}
      </Link>
    );
  } else if (href) {
    button = (
      <a
        className={`btn ${className} ${classNameProp}`}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        {Icon && <Icon />}
        {children && children}
      </a>
    );
  } else {
    button = (
      <button
        className={`btn ${className} ${classNameProp}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  }

  return button;
}

export default Button;
