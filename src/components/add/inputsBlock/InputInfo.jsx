import React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap'

const InputInfo = ({ info }) => {
  if (info !== '') {
    let [iconClassName, tooltip] = info === 'correct' 
      ? ["fa fa-thumbs-o-up", "Correct data! Well done"]
      : ["fa fa-exclamation", info];
    return (
      <div className="inputInfo">
        <OverlayTrigger overlay={
          <Tooltip id="modal-tooltip">
            {tooltip}
          </Tooltip>
        }>
          <a>
            <i 
              className= {iconClassName} 
              style={{fontSize: '30px'}}
            ></i>
          </a>
        </OverlayTrigger> 
      </div>          
    )
  } else return null
}
 
export default InputInfo;