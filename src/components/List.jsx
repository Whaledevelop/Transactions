import React from 'react'
import moment from 'moment'

const List = ({object}) => {
  let uniqueKeys = [];
  for (let i = 0; i < object.length; i++) {
    let itemKeys = Object.keys(object[i]);
    for(let j=0; j < itemKeys.length; j++) {
      if (uniqueKeys.indexOf(itemKeys[j]) === -1) {
        uniqueKeys.push(itemKeys[j])
      }
    }
  }
  let params = uniqueKeys.filter(key => key !== 'active');
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {params.map((key,i) => {
            return <th key={"key_"+i}>{key}</th>
          })}
        </tr>
      </thead>
      <tbody>
          {object.map((item,i) => {
            return (
              <tr key={"item_"+i}>
                {params.map((key,j) => {
                  if (params[j] === 'date') {
                    return <td key={"key_"+j}>{moment(item[params[j]]).format('HH:mm - DD.MM.YYYY')}</td>;
                  }
                  return <td key={"key_"+j}>{item[params[j]]}</td>
                })}
              </tr>
            )
          })}    								
      </tbody>
    </table>
  )
}
  
export default List