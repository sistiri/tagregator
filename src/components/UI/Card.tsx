import React, { PropsWithChildren, ReactNode } from "react";
import classes from './Card.module.css'

const Card = (props: PropsWithChildren<ReactNode>) => {
return <div className={classes.card}>{props.children}</div>
};

export default Card