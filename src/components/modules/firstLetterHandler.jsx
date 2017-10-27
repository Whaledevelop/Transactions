export const firstLetterHandler = (name, action) => {
  let lowName = name.toLowerCase()
  let firstLetter = ''
  if (action === 'toUpperCase') {
    firstLetter = lowName[0].toUpperCase()
  } else if (action === 'toLowerCase') {
    firstLetter = lowName[0].toLowerCase()
  }
  let cutName = lowName.slice(1, lowName.length)
  name = firstLetter + cutName 
  return name        
}