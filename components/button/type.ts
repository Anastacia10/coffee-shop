import { ReactNode } from "react";

export interface IButtonProps {
  children: string | ReactNode;
  onClick?: () => void;
  size?: "medium" | "small";
  link?: string;
  type?: "button" | "reset" | "submit";
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  iconPosition?: "start" | "end";
}
