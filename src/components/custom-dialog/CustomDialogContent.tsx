import React from "react";

type CustomDialogContentProps = {
//   dividers?: Boolean;
  styles?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
};

const CustomDialogContent = (props: CustomDialogContentProps) => {
  return (
    <div
      className="h-100  d-flex border-top border-bottom  flex-column"
      style={props.styles}
    >
      {props.children}
    </div>
  );
};

export default CustomDialogContent;
