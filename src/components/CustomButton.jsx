import React from "react";

export const DELETE_TYPE = "bg-danger";
export const READ_TYPE = "bg-success";
export const EDIT_TYPE = "bg-primary";
export const ADD_TYPE = "bg-warning";
export const SAVE_TYPE = "bg-success";

const CustomButton = ({ title, onclick, type }) => {
  return (
    <button onClick={onclick} className={`btn text-white ${type}`}>
      {title}
    </button>
  );
};

export default CustomButton;
