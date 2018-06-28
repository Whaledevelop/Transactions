import React from 'react';

const AddButton = ({ addStatus, onClick }) => {
  let className;
  switch (addStatus) {
    case "Ready" : {
      className = "btn btn-primary";
      break;
    }
    case "Not ready" : {
      className = "btn btn-primary disabled";
      break;
    }
    case "Rejected" : {
      className = "btn btn-warning";
      break;
    }
    case "Done" : {
      className = "btn btn-success";
      break;
    }
    case "Overrejected" : {
      className = "btn btn-danger";
      break;
    }
    default: return null
  }
  return (
    <div
      className={`${className} addButton`}
      onClick={onClick}
    >
      Add
    </div>
  )
}
 
export default AddButton;