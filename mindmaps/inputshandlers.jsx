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

                        let info = '';
                        if (inputName === 'filterBy') {
                                //info = inputsDataHandler(inputValue, currentInputData);
                                
                                console.log (nameInputValue, nameInputIndex, currentInputData, currentInputIndex)
                                //let nameInputInfo = inputsDataHandler(nameInputValue, currentInputData, inputValue);
                        }
                        for (let i = 0; i < data.length; i++) {
                                let {name, type} = data[i]
                                if (name === inputName) {
                                        if (inputName === 'filterBy') {
                                                for(let i = 0; i < data.length; i++) {
                                                        if()
                                                }
                                        }
                                        let info = inputsDataHandler(inputValue, data);
*/
 /*Должен выдавать объект: 
                        {index: , info: }, 
                        если filterBy, то 
                        filterBy: {index: , info: },
                        name: {index: , info: }*//*
                        if (inputName === 'filterBy') {
                                this.setState(prevState => (
                                        prevState.data[infoData.filterBy.index].value = inputValue,  
                                        prevState.data[infoData.filterBy.index].info = infoData.filterBy.info,
                                        prevState.data[infoData.name.index].info = infoData.name.info
                                ))
                        } else {
                                let {index, info} = infoData;
                                this.setState(prevState => (
                                        prevState.data[index].value = inputValue,  
                                        prevState.data[index].info = info
                                ))
                        } 
                */