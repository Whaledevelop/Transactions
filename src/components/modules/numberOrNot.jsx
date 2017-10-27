export const numberOrNot = (name) => {
  let parsedName = parseInt(name, 10);
  if (!isNaN(parsedName)) {
    return true
  } else return false 
}