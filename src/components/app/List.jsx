import React from 'react'
import moment from 'moment'
import _ from 'lodash'

const List = ({object}) => {
  let keys = [];
  for (let i = 0; i < object.length; i++) {keys = keys.concat(Object.keys(object[i]))}
  let uniqueKeys = _.uniq(keys);
  uniqueKeys = uniqueKeys.filter(key => key !== 'active');
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {uniqueKeys.map((key,i) => {
            return <th key={"key_"+i}>{key}</th>
          })}
        </tr>
      </thead>
      <tbody>
          {object.map((item,i) => {
            return (
              <tr key={"item_"+i}>
                {uniqueKeys.map((key,j) => {
                  if (uniqueKeys[j] === 'date') {
                    return <td key={"key_"+j}>{moment(item[uniqueKeys[j]]).format('HH:mm - DD.MM.YYYY')}</td>;
                  }
                  return <td key={"key_"+j}>{item[uniqueKeys[j]]}</td>
                })}
              </tr>
            )
          })}    								
      </tbody>
    </table>
  )
}
  
export default List