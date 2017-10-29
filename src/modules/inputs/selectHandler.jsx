export const selectHandler = (value, selectValues) => {
  if (selectValues.indexOf(value) !== -1) {
    return 'correct'
  } else {
    return ''
  }
}