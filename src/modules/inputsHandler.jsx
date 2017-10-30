import {numberHandler} from './inputs/numberHandler'
import {textHandler} from './inputs/textHandler'
import {selectHandler} from './inputs/selectHandler'
import {dateHandler} from './inputs/dateHandler'
import {descriptionHandler} from './inputs/descriptionHandler'

export const inputsHandler = (currentInput, value, dataFromAllInputes) => {
  let {type, selectValues} = currentInput;
  let info;
  if (type === 'number') {
    info = numberHandler(value)
  } else if (type === 'text') {
    info = textHandler(value)
  } else if (type === 'select') {
    info = selectHandler(value, selectValues)
  } else if (type === 'date') {
    info = dateHandler(value)
  } else if (type === 'description') {
    info = descriptionHandler(value, dataFromAllInputes.filterBy)
  } else {
    info = ''
  }
  return info
}