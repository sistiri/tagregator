import { ReactNode } from "react";
import { RequestConfig } from "../../hooks/use-http";

import classes from "./Button.module.css";

type buttonProps = {
  className: string;
  children: ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  onSubmit?: () => void;
  onFetch?: (
    requestConfig: RequestConfig,
    applyData: Function
  ) => Promise<void>;
};

const Button = (props: buttonProps) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
