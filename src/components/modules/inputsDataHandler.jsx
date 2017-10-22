import moment from 'moment';    

export const inputsDataHandler = (inputName, inputValue, data) => {
        let currentInputData = data.find(input => input.name === inputName)
        let currentInputIndex = data.indexOf(currentInputData);
        let {type, selectValues} = currentInputData;
        let info = '';
        if (type ==='numbers') {
                inputValue = parseInt(inputValue, 10);
                if (inputValue === '') {
                        info = ''       
                } else if (isNaN(inputValue)) {
                        info = 'Enter numbers'
                } else if (inputValue < 0) {
                        info = 'Enter positive number'
                } else if (inputValue > 1000000000) {
                        info = 'Too much'
                } else {
                        info = 'correct'
                }
        } else if (type === 'text') {
                if (inputValue === '') {
                        info = ''
                } else info = 'correct'; 
        } else if (type === 'description') {
                let filterBy = data.find(input => input.name === 'filterBy').value;
                if (filterBy !== '') {
                        let lowName = inputValue.toLowerCase();
                        let nameObj = lowName.split(' ');
                        if (filterBy === 'value') {
                                let moreOrLess = nameObj.find(name => {
                                        return name === 'more' || name === 'less'
                                });
                                let numberOrNot = (name) => {
                                        let parsedName = parseInt(name, 10);
                                        if (!isNaN(parsedName)) {
                                                return true
                                        } else return false 
                                }
                                let numbers = nameObj.find(name => {
                                        return numberOrNot(name)
                                })
                                if (moreOrLess === undefined & numbers === undefined) {
                                        info = 'Enter value and word \'more\' or \'less\''
                                } else if (moreOrLess === undefined & numbers !== undefined) {
                                        info = 'Specify \'more\' or \'less\''
                                } else if (moreOrLess !== undefined & numbers === undefined) {
                                        info = 'Enter the value with numbers'
                                } else info = 'correct'
                        } else if (filterBy === 'type') {
                                let incomeOrConsumption = nameObj.find(name => {
                                        return name === 'income' || name === 'consumption'
                                })
                                if (incomeOrConsumption === undefined) {
                                        info = 'Enter income or consumption type'
                                } else info = 'correct'
                        } else if (filterBy === 'date') {
                                let numberOrNot = (name) => {
                                        let parsedName = parseInt(name, 10);
                                        if (!isNaN(parsedName)) {
                                                return true
                                        } else return false 
                                }
                                let numbers = nameObj.find(name => {
                                        return numberOrNot(name)
                                })
                                let pluralUnits = nameObj.find(name => {
                                        return name === 'days' 
                                                || name === 'weeks'
                                                || name === 'months'
                                                || name === 'years'
                                })
                                let singleUnits = nameObj.find(name => {
                                        return name === 'day' 
                                                || name === 'week'
                                                || name === 'month'
                                                || name === 'year'
                                })
                                if (pluralUnits === undefined 
                                        & singleUnits === undefined
                                        & numbers === undefined) {
                                                info = 'Enter unit and value';
                                } else if (pluralUnits === undefined 
                                        & singleUnits === undefined 
                                        & numbers !== undefined) {
                                                info = 'Specify what to compare'
                                } else if (pluralUnits !== undefined 
                                        & numbers === undefined) {
                                                info = 'Enter the value to compare'
                                } else if (pluralUnits === undefined 
                                        & singleUnits !== undefined 
                                        & numbers !== undefined ){
                                                if (numbers === '1') {
                                                        info = 'correct'
                                        } else info = 'No value needed if you enter single unit'
                                } else if ((pluralUnits === undefined 
                                        & singleUnits !== undefined 
                                        & numbers === undefined) 
                                        || (pluralUnits !== undefined 
                                        & numbers !== undefined)) {
                                                info = 'correct'
                                }
                        }
                }  else info = 'Fill "filter by" firstly'
                if (inputValue === '') {
                        info = '';
                }
        } else if (type === 'select') {
                if (inputValue === '') {
                        info = ''
                } else if (selectValues.indexOf(inputValue) !== -1) {
                        info = 'correct'
                }
        } else if (type === 'date') {
                let dateForComparison = moment(inputValue).format('YYYYMMDD');
                let now = moment().format('YYYYMMDD');
                let lowestAvailableDate = moment().subtract(50, 'years').format('YYYYMMDD');
                if (inputValue === '') {
                        info = ''
                } else if (dateForComparison > now) {
                        info = 'Only past transactions'
                } else if (dateForComparison < lowestAvailableDate) {
                        info = 'Too old'
                } else {
                        info ='correct'
                }
        } else if (type === 'colors') {
                if (inputValue === '') {
                        info = ''
                } else if (inputValue === 'btn btn-default') {
                        info = 'Choose color of filter button'
                } else {
                        info = 'correct'
                }
        }
        data[currentInputIndex].value = inputValue;
        data[currentInputIndex].info = info;
        if (inputName === 'filterBy') {
                let nameInputValue = data.find(input => input.name === 'name').value;
                inputsDataHandler('name', nameInputValue, data);
        }
        return data     
}

