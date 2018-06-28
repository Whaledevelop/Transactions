import React from 'react'

import InputRow from './inputsBlock/InputRow';
import AddFormFooter from './footer/AddFormFooter';

const AddForm = ({ fetched, addFormData, newItem, info, onChange, onSubmit }) => {
  return (
    <div style={{marginLeft: '80px'}}>
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
            <AddFormFooter
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

