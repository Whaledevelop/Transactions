export const firstLetterHandler = (name, action) => {
        let firstLetter = '';
        if (action === 'toUpperCase') {
            firstLetter = name[0].toUpperCase();
        } else if (action === 'toLowerCase') {
            firstLetter = name[0].toLowerCase();
        }
        let cutName = name.slice(1, name.length);
        name = firstLetter + cutName; 
        return name;        
}