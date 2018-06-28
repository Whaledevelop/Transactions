import React from 'react'
import moment from 'moment'

const ListTable = ({ listData }) => {
  if (listData.length > 1) {
    const columsHeaders = Object.keys(listData[0]);
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {columsHeaders.map((key,i) => (
              <th key={i}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listData.map(elem => (
            <tr key={elem.id}>
              {columsHeaders.map((columnHeader, i) => (
                <td key={i}>
                  {columnHeader === 'date' 
                    ? moment(elem[columnHeader]).format('HH:mm - DD.MM.YYYY')
                    : elem[columnHeader]
                  }
                </td>
              ))}
            </tr>
          ))}    								
        </tbody>
      </table>
    )
  } else {
    return (
      <h4 className = "statusMessageHeader">
        No elements to render
      </h4> 
    )
  }
}
  
export default ListTable