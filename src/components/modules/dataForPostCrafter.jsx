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
            });
            let numberOrNot = (name) => {
                let parsedName = parseInt(name, 10);
                if (!isNaN(parsedName)) {
                    return true
                } else return false 
            }
            let value = nameObj.find(name => {
                return numberOrNot(name)
            })
            additionalData = {
                value: value,
                moreOrLess: moreOrLess
            }
        }
        if (filterBy === 'type') {
            /*
                -----
                Не получилось сделать через axios, чтобы получить типы транзакций из json, не могу вернуть результаты
                -----
                const axiosReturn = () => {
                    return axios.get(`http://localhost:3333/transactions`)
                        .then(response => {
                            let types = response.data.map(transaction => {
                                return transaction.type
                            })
                            let uniqueTypes = [];
                            for (let i = 0; i < types.length; i++) {
                                if(uniqueTypes.indexOf(types[i]) === -1) {
                                    uniqueTypes.push(types[i])
                                }
                            }
                            let type = '';
                            for (let i = 0; i < uniqueTypes.length; i++) {
                                let findType = nameObj.find(name => {
                                    return name === uniqueTypes[i]
                                });
                                if (findType !== undefined) {
                                    type = findType
                                }
                            }
                            let additionalData = {
                                type: type
                            }
                            return additionalData;
                        })
                        .catch(error => {console.log('Error', error)})
                }
                return axiosReturn();
            */
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
                    || name === 'week'
                    || name === 'weeks'
                    || name === 'month'
                    || name === 'months'
                    || name === 'year'
                    || name === 'years'
            });
            let numberOrNot = (name) => {
                let parsedName = parseInt(name, 10);
                if (!isNaN(parsedName)) {
                    return true
                } else return false 
            }
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

