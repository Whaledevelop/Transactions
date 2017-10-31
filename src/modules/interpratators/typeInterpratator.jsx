export const typeInterpratator = (nameObj) => {
  let value = nameObj.find(name => {
    return name === 'income' || name === 'consumption'
  });
  return {
    value: value
  } 
}
