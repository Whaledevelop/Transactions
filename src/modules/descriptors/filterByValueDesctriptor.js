export const filterByValueDescriptor = valueArray => {
  const unit = valueArray.find(unit => {
    return unit === 'more' || unit === 'less'
  })
  const value = valueArray.find(value => {
    return !isNaN(parseInt(value, 10))
  })
  let info;
  if (unit === undefined & value === undefined) {
    info = 'Enter value and word \'more\' or \'less\''
  } else if (unit === undefined & value !== undefined) {
    info = 'Specify \'more\' or \'less\''
  } else if (unit !== undefined & value === undefined) {
    info = 'Enter the value with numbers'
  } else info = 'correct'
  return [value, unit, info]
}