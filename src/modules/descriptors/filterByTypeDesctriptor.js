export const filterByTypeDescriptor = valueArray => {
  const value = valueArray.find(value => {
    return value === 'income' || value === 'consumption'
  })
  const info = value === undefined 
    ? "Enter income or consumption type"
    : "correct"
  return [value, "", info]
}