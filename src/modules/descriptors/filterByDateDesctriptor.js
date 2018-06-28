export const filterByDateDescriptor = valueArray => {
  const UNITS = ["day", "days", "week", "weeks", "month", "months", "year", "years"];
  const value = valueArray.find(value => {
    return !isNaN(parseInt(value, 10))
  })
  const unit = valueArray.find(value => {
    return UNITS.indexOf(value) !== -1
  }) 
  let info;
  if (unit === undefined & value === undefined) {
    info = 'Enter unit and value'
  } else if (unit === undefined & value !== undefined) {
    info = 'Specify unit like day, week, month or year'
  } else if (unit !== undefined & value === undefined) {
    info = 'Enter number of ' + unit
  } else info = 'correct'
  return [value, unit, info]
}