export const nameInterpretator = (name, filterBy) => {
  let lowName = name.toLowerCase();
  let nameObj = lowName.split(' ');
  let numberOrNot = (name) => {
    let parsedName = parseInt(name, 10);
    if (!isNaN(parsedName)) {
      return true
    } else return false 
  }
  let additionalData = {}
  if (filterBy === 'value') {      
    let unit = nameObj.find(name => {
      return name === 'more' || name === 'less'
    });
    let value = nameObj.find(name => {
     return numberOrNot(name)
    })
    value = parseInt(value, 10);
    additionalData = {
      value: value,
      unit: unit
    }
  }
  if (filterBy === 'type') {
    let value = nameObj.find(name => {
      return name === 'income' || name === 'consumption'
    });
    additionalData = {
      value: value
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
    });
    let value = nameObj.find(name => {
      return numberOrNot(name)
    })
    if (value === undefined & (unit === 'year' || unit === 'month' || unit === 'week' || unit === 'day')) {      
      value = 1;
    }
    value = parseInt(value, 10);
    additionalData = {
      value: value,
      unit: unit
    }     
  }
  return additionalData
}