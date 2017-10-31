import {numberOrNot} from '../functional/numberOrNot'

export const valueInterpratator = (nameObj) => {
  let unit = nameObj.find(name => {
    return name === 'more' || name === 'less'
  });
  let value = nameObj.find(name => {
   return numberOrNot(name)
  })
  value = parseInt(value, 10);
  return {
    value: value,
    unit: unit
  }
}
