import {numberOrNot} from '../functional/numberOrNot'

export const dateInterpratator = (nameObj) => {
  let unit = nameObj.find(name => {
    return name === 'day' 
    || name === 'days'
    || name === 'week'
    || name === 'weeks'
    || name === 'month'
    || name === 'months'
    || name === 'year'
    || name === 'years'
  });
  let value = nameObj.find(name => {
    return numberOrNot(name)
  })
  if (value === undefined & (unit === 'year' || unit === 'month' || unit === 'week' || unit === 'day')) {      
    value = 1;
  }
  value = parseInt(value, 10);
  return {
    value: value,
    unit: unit
  }     
}