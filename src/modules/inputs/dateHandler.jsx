import moment from 'moment';    

export const dateHandler = (value) => {
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
