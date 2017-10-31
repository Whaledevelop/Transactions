import {valueInterpratator} from './interpratators/valueInterpratator'
import {typeInterpratator} from './interpratators/typeInterpratator'
import {dateInterpratator} from './interpratators/dateInterpratator'

export const nameInterpretator = (name, filterBy) => {
  let lowName = name.toLowerCase();
  let nameObj = lowName.split(' ');
  let additionalData = {}
  if (filterBy === 'value') {
    additionalData = valueInterpratator(nameObj);  
  }
  if (filterBy === 'type') {
    additionalData = typeInterpratator(nameObj);     
  }
  if (filterBy === 'date') {
    additionalData = dateInterpratator(nameObj)
  }
  return additionalData
}