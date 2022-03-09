import React, { ReactElement } from "react";
import classes from "./Card.module.css";

type cardProps = {
  key: string;
  className: string;
  children: ReactElement;
};

const Card = (props: cardProps) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
