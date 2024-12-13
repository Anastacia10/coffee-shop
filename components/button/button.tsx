import { SyntheticEvent } from "react";
import Link from "next/link";
import { joinClasses } from "utils/joinClasses";
import { IButtonProps } from "./type";
import styles from "./button.module.scss";

const Button = ({
  type = "button",
  onClick,
  size = "small",
  link,
  Icon,
  iconPosition = "end",
  children,
}: IButtonProps) => {
  const handleLinkClick = (e: SyntheticEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return link ? (
    <Link
      href={link}
      className={joinClasses(styles.button, styles[size])}
      onClick={handleLinkClick}
    >
      {Icon && iconPosition === "start" && <Icon />}
      {children}
      {Icon && iconPosition === "end" && <Icon />}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={joinClasses(styles.button, styles[size])}
    >
      {Icon && iconPosition === "start" && <Icon />}
      {children}
      {Icon && iconPosition === "end" && <Icon />}
    </button>
  );
};

export default Button;
