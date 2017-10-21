export const filtersInputesHandler = (name, value) => { 
    if (value === 'type') {
        return {
            name: 'type',
            type: 'select',
            selectValues: ['', 'income', 'consumption']
        }
      } else if (value === 'value') {
          return {
            name: 'value',
            type: 'numbers',  
          }
      } else if (value === 'date') {
          return {
              name: 'past',
              type: 'numbers'
          }
      } else if (name === 'value') {
          return {
              name: 'moreOrLess',
              type: 'select',
              selectValues: ['', 'more', 'less']
          }
      } else if (name === 'past') {
          return {
              name: 'unit',
              type: 'select',
              selectValues: ['', 'days', 'months', 'years']
          }
      }
}

if (inputName === 'filterBy') {
    let additionalInput = filtersInputesHandler('', inputValue);
    this.setState(prevState => (
            prevState.data[length] = additionalInput
    ))
    let additional = additionalInput.name
    if (additional === 'value' || additionalInput === 'date') {
            let moreInputes = filtersInputesHandler(additional, '');
            this.setState(prevState => (
                    prevState.data[length+1] = moreInputes
            ))
    }
}