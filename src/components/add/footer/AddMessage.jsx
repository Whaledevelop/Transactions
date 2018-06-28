import React from 'react';

const AddMessage = ({ addStatus }) => {
  let message;
  switch (addStatus) {
    case "Ready" : {
      message = "Correct data. Ready to add";
      break;
    }
    case "Not Ready" : {
      message = "";
      break;
    }
    case "Rejected" : {
      message = "Fill all inputs with correct data";
      break;
    }
    case "Overrejected" : {
      message = "Don't be angry. Fill inputs"
      break
    }
    case "Done" : {
      message = "Done";
      break;
    }
    default: return null
  }
  return (
    <div className="addMessage">
      {message}
    </div>
  )
}
 
export default AddMessage;