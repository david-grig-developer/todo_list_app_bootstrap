import React from "react";

type CustomDialogActionsProps = {
  disableSpacing?: Boolean;
  styles?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
};

const CustomDialogActions = (props: CustomDialogActionsProps) => {
  return (
    <div
      className="d-flex flex-grow justify-content-end p-2"
      style={props.styles}
    >
      {props.children}
    </div>
  );
};

export default CustomDialogActions;
