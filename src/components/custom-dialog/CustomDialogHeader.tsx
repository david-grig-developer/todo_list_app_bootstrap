import React from "react";
import { Button } from "react-bootstrap";

type CustomDialogHeaderProps = {
  onClose: () => void;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  title?: String;
};


const CustomDialogHeader = (props: CustomDialogHeaderProps) => {
  return (
    <div className="d-flex flex-row p-2 justify-content-between align-items-center">
      <h5>{props.title}</h5>
      <Button variant="white" onClick={props.onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-x-lg "
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </Button>
    </div>
  );
};

export default CustomDialogHeader;
