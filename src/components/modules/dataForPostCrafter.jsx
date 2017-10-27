import {numberOrNot} from './numberOrNot'

export const dataForPostCrafter = (id, data) => {
  let newData = {};
  newData['id'] = id;       
  for (let i = 0; i < data.length; i++) {
    let {name, value} = data[i];
    newData[name] = value;
  }
  let objKeys = Object.keys(newData);
  if (objKeys.includes('name') & objKeys.includes('filterBy')) {
    let {name, filterBy} = newData;
    let lowName = name.toLowerCase();
    let nameObj = lowName.split(' ');
    let additionalData = {}
    if (filterBy === 'value') {      
      let moreOrLess = nameObj.find(name => {
        return name === 'more' || name === 'less'
      })
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
      })
      additionalData = {
        type: type
      }      
    }
    if (filterBy === 'date') {
      let unit = nameObj.find(name => {
        return name === 'day' 
          || name === 'days'
          || name === 'week'
          || name === 'weeks'
          || name === 'month'
          || name === 'months'
          || name === 'year'
          || name === 'years'
      })
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
    for (let key in additionalData) {
      newData[key] = additionalData[key]
    }
  }
  return newData
}

