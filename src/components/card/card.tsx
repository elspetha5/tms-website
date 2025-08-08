import { PropsWithChildren } from "react";
import "./card.scss";

export enum backgroundColors {
  black = "black",
  blue = "blue",
  darkGrey = "dark-grey",
  grey = "grey",
  lightGrey = "light-grey",
  white = "white",
}

interface CardProps {
  backgroundColor?: backgroundColors;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function Card({ children, ...props }: PropsWithChildren<CardProps>) {
  const {
    backgroundColor = backgroundColors.white,
    className,
    disabled = false,
    onClick,
  } = props;

  return (
    <div
      className={`card-container card-background-${
        disabled ? backgroundColors.grey : backgroundColor
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;
