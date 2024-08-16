import React from "react";
import { Button } from "react-bootstrap";

// component in test mode
type CustomDialogProps = {
  open: Boolean;
  fullScreen?: Boolean;
  fullWidth?: Boolean;
  styles?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
};

const CustomDialog = (props: CustomDialogProps) => {
  return (
    <>
      {props.open ? (
        // positioning and zIndex in test mode
        <div
          className="w-50 h-50  z-3 position-fixed shadow bg-white rounded d-flex flex-column align-items-between justify-content-stretch"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          {props.children}
        </div>
      ) : null}
      ;
    </>
  );
};

export default CustomDialog;
