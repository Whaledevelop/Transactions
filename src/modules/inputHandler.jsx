import moment from 'moment';    

export const inputHandler = (name, value) => {
  if (name === 'value') {
    if (value === '') {
      return ''       
    } else if (isNaN(value)) {
      return 'Enter numbers'
    } else if (value < 0) {
      return 'Enter positive number'
    } else if (value > 1000000000) {
      return 'Too much'
    } else {
      return 'correct'
    }
  } else if (name === 'type') {
    if (value === '') {
      return ''
    } else if (value === 'income' || value === 'consumption') {
      return 'correct'
    }
  } else if (name === 'date') {
    let dateForComparison = moment(value).format('YYYYMMDD');
    let now = moment().format('YYYYMMDD');
    let lowestAvailableDate = moment().subtract(50, 'years').format('YYYYMMDD');
    if (value === '') {
      return ''
    } else if (dateForComparison > now) {
      return 'Only past transactions'
    } else if (dateForComparison < lowestAvailableDate) {
      return 'Too old'
    } else {
      return 'correct'
    }
  }
}