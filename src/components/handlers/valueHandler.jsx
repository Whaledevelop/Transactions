export const valueHandler = (value) => {
            let parsedValue = parseInt(value, 10);
            if (value === '') {
                        return ''       
            } else if (isNaN(parsedValue)) {
                        return 'Please, enter numbers'
            } else if (parsedValue < 0) {
                        return 'Enter positive number'
            } else if (parsedValue > 1000000) {
                        return 'Wow wow wow, it\'s too much, stop, you are not a millionaire'
            } else {
                        return 'correct'
            }
} 

