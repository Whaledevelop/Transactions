export const numberHandler = (value) => {
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