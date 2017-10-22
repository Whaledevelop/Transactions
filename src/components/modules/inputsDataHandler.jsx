import moment from 'moment';    
/*
        let selectValues = [];
                                        let filterBy = '';
                                        if (type==='select') {
                                               selectValues = data[i].selectValues;
                                        }
                                        if (inputName === 'name') {
                                                for (let i=0; i < data.length; i++) {
                                                        if(data[i].name === 'filterBy')         {
                                                                filterBy = data[i].value
                                                        }
                                                }
                                                let inputData = {
                                                        value: inputValue,
                                                        filterBy: filterBy
                                                }
                                        }
*/
export const inputsDataHandler = (value, type, selectValues, filterBy) => {
        if (type ==='numbers') {
                let parsedValue = parseInt(value, 10);
                if (value === '') {
                            return ''       
                } else if (isNaN(parsedValue)) {
                            return 'Please, enter numbers'
                } else if (parsedValue < 0) {
                            return 'Enter positive number'
                } else if (parsedValue > 1000000000) {
                            return 'Too much'
                } else {
                            return 'correct'
                }
        } else if (type === 'text') {
                if (value === '') {
                        return ''
                } else return 'correct'; 
        } else if (type === 'description') {
                if (value === '') {
                        return ''       
                } else if (filterBy !== '') {
                        let lowName = value.toLowerCase();
                        let nameObj = lowName.split(' ');
                        if (filterBy === 'value') {
                                let moreOrLess = nameObj.find(name => {
                                        return name === 'more' || name === 'less'
                                });
                                if (moreOrLess === undefined) {
                                        return 'Point \'more\' or \'less\''
                                }
                                let numberOrNot = (name) => {
                                        let parsedName = parseInt(name, 10);
                                        if (!isNaN(parsedName)) {
                                            return true
                                        } else return false 
                                }
                                let numbers = nameObj.find(name => {
                                        return numberOrNot(name)
                                })
                                if (numbers === undefined) {
                                        return 'Enter the value with numbers'
                                } else return 'correct'
                        } else if (filterBy === 'type') {
                                let incomeOrConsumption = nameObj.find(name => {
                                        return name === 'income' || name === 'consumption'
                                })
                                if (incomeOrConsumption === undefined) {
                                        return 'Enter income or consumption type'
                                } else return 'correct'
                        } else if (filterBy === 'date') {

                        }
                } else return 'Fill \"filter by\" firstly'
        } else if (type === 'select') {
                if (value === '') {
                    return ''
                } else if (selectValues.indexOf(value) !== -1) {
                    return 'correct'
                }
        } else if (type === 'date') {
                let dateForComparison = moment(value).format('YYYYMMDD');
                let now = moment().format('YYYYMMDD');
                let lowestAvailableDate = moment().subtract(30, 'years').format('YYYYMMDD');
                if (value === '') {
                        return ''
                } else if (dateForComparison > now) {
                        return 'Only past transactions'
                } else if (dateForComparison < lowestAvailableDate) {
                        return 'Too old'
                } else {
                        return 'correct'
                }
        }        
}
