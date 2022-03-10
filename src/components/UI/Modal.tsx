import { Fragment, ReactElement } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

type BackdropProps = {
}

type ModalOverlayProps = {
children: ReactElement
}

type ModalProps = {
children: ReactElement
}

const Backdrop = (props: BackdropProps) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')

const Modal = (props: ModalProps) => {
return <Fragment>
{ReactDOM.createPortal(<Backdrop />, portalElement!)}
{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement!)}
</Fragment>
}
export default Modal;