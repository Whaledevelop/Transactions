export const descriptionHandler = (value, filterBy) => {
  if (filterBy !== undefined) {
    let valueObj = value.toLowerCase().split(' ');
    let numberOrNot = (name) => {
      let parsedName = parseInt(name, 10);
      if (!isNaN(parsedName)) {
        return true
      } else return false 
    }
    if (filterBy === 'value') {
      let moreOrLess = valueObj.find(name => {
        return name === 'more' || name === 'less'
      });
      let numbers = valueObj.find(name => {
        return numberOrNot(name)
      })
      if (moreOrLess === undefined & numbers === undefined) {
        return 'Enter value and word \'more\' or \'less\''
      } else if (moreOrLess === undefined & numbers !== undefined) {
        return 'Specify \'more\' or \'less\''
      } else if (moreOrLess !== undefined & numbers === undefined) {
        return 'Enter the value with numbers'
      } else return 'correct'
    } else if (filterBy === 'type') {
      let incomeOrConsumption = valueObj.find(name => {
        return name === 'income' || name === 'consumption'
      })
      if (incomeOrConsumption === undefined) {
        return 'Enter income or consumption type'
      } else return 'correct'
    } else if (filterBy === 'date') {
      let numbers = valueObj.find(name => {
        return numberOrNot(name)
      })
      let pluralUnits = valueObj.find(name => {
        return name === 'days' || name === 'weeks' || name === 'months' || name === 'years'
      })
      let singleUnits = valueObj.find(name => {
        return name === 'day' || name === 'week' || name === 'month' || name === 'year'
      })
      if (pluralUnits === undefined & singleUnits === undefined & numbers === undefined) {
        return 'Enter unit and value';
      } else if (pluralUnits === undefined & singleUnits === undefined & numbers !== undefined) {
        return 'Specify what to compare'
      } else if (pluralUnits !== undefined & numbers === undefined) {
        return 'Enter the value to compare'
      } else if (pluralUnits === undefined & singleUnits !== undefined & numbers !== undefined ){
        if (numbers === '1') {
          return 'correct'
      } else return 'No value needed if you enter single unit'
      } else if ((pluralUnits === undefined & singleUnits !== undefined & numbers === undefined) 
      || (pluralUnits !== undefined & numbers !== undefined)) {
        return 'correct'
      }
    } 
  } else {
    return 'Fill "filter by" firstly'
  }
}

    