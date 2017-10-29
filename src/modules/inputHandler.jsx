import moment from 'moment';    

export const inputHandler = (type, value, selectValues) => {
  switch (type) {
    case 'number': {
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
    }
    case 'text': {
      if (value === '') {
        return ''       
      } else return 'correct'
    }
    case 'select': {
      if (value === '') {
        return ''
      } else if (selectValues.indexOf(value) !== -1) {
        return 'correct'
      } else if (isNaN(value) === true) {
        return ''
      }
    }
    case 'date': {
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
}