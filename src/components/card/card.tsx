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
  badge?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function Card({ children, ...props }: PropsWithChildren<CardProps>) {
  const {
    badge,
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
      {badge && <div className="card-badge">{badge}</div>}
      {children}
    </div>
  );
}

export default Card;
