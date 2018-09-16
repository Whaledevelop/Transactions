import React from 'react'

import InputRow from './inputsBlock/InputRow';
import AddFormFooterContainer from '../../containers/AddFormFooterContainer';

const AddForm = ({ fetched, addFormData, newItem, info, onChange, onSubmit }) => {
  return (
    <div className = "addForm">
      {fetched ? (
        <form className="form-horizontal">
          <fieldset>
            {addFormData.map((input,i) => (
              <InputRow 
                key = {i}
                input={input} 
                newItem={newItem}
                onChange={onChange}
              />
            ))}
            <AddFormFooterContainer
              info = {info}
              inputsAmount = {addFormData.length}
              onSubmit={onSubmit}
            />
          </fieldset>           
        </form>
      ) : (
        <h4 className = "loadingHeader">Loading</h4>
      )}
    </div>
  )
}

export default AddForm

