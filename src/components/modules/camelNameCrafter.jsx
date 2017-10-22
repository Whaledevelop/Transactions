import { firstLetterHandler } from './firstLetterHandler'

export const camelNameCrafter = (name) => {
        let counter = 0;
        let newName = [];
        let upperOrLower = (word) => {
                if (counter === 0) {
                        newName.push(firstLetterHandler(word, 'toLowerCase'));
                } else {
                        newName.push(firstLetterHandler(word, 'toUpperCase'));
                }
        }
        for (let i=0; i< name.length; i++) {
                if (name[i] === ' ') {
                        let word = name.slice(counter, i);
                        upperOrLower(word);
                        counter = i+1;
                } else if ((i+1) === name.length) {
                        let word = name.slice(counter, i+1);
                        upperOrLower(word);
                }
        }
        return newName.join('');
}  