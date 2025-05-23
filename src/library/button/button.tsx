import { ElementType, ReactNode, SyntheticEvent } from "react";
import { Link } from "react-router-dom";

import "./button.scss";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  icon?: ElementType;
  isDisabled?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
  onClick?: (event: SyntheticEvent) => void;
  to?: string;
}

function Button(props: ButtonProps) {
  const {
    children,
    className: classNameProp,
    href,
    icon: Icon,
    isDisabled,
    isPrimary,
    isSecondary,
    isTertiary,
    onClick,
    to,
  } = props;
  let className = "";
  if (isPrimary) className = "btn-primary";
  if (isSecondary) className = "btn-secondary";
  if (isTertiary) className = "btn-tertiary";
  if (isDisabled) className = `${className}-disabled`;
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
      <a className={`btn ${className} ${classNameProp}`} href={href}>
        {Icon && <Icon />}
        {children && children}
      </a>
    );
  } else {
    button = (
      <button className={`btn ${className} ${classNameProp}`} onClick={onClick}>
        {children}
      </button>
    );
  }

  return button;
}

export default Button;
