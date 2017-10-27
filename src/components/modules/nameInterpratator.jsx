import {numberOrNot} from './numberOrNot'

export const nameInterpratator = (name, filterBy) => {
  let lowName = name.toLowerCase();
  let nameObj = lowName.split(' ');
  let additionalData = {}
  if (filterBy === 'value') {      
    let moreOrLess = nameObj.find(name => {
      return name === 'more' || name === 'less'
    });
    let value = nameObj.find(name => {
     return numberOrNot(name)
    })
    additionalData = {
      value: value,
      moreOrLess: moreOrLess
    }
  }
  if (filterBy === 'type') {
    let type = nameObj.find(name => {
      return name === 'income' || name === 'consumption'
    });
    additionalData = {
      type: type
    }      
  }
  if (filterBy === 'date') {
    let unit = nameObj.find(name => {
      return name === 'day' 
      || name === 'days'
      || name === 'month'
      || name === 'months'
      || name === 'year'
      || name === 'years'
    });
    let past = nameObj.find(name => {
      return numberOrNot(name)
    })
    if (past === undefined & (unit === 'year' || unit === 'month' || unit === 'week' || unit === 'day')) {      
      past = 1;
    }
    additionalData = {
      past: past,
      unit: unit
    }     
  }
  return additionalData
}