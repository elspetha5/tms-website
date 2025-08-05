import { PropsWithChildren } from "react";
import "./card.scss";

export enum backgroundColors {
  black = "black",
  blue = "blue",
  darkGrey = "dark-grey",
  lightGrey = "light-grey",
  white = "white",
}

interface CardProps {
  backgroundColor?: backgroundColors;
  className?: string;
  onClick?: () => void;
}

function Card({ children, ...props }: PropsWithChildren<CardProps>) {
  const {
    backgroundColor = backgroundColors.white,
    className,
    onClick,
  } = props;

  return (
    <div
      className={`card-container card-background-${backgroundColor} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;
