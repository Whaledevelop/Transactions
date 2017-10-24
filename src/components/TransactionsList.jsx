import React from 'react'

const TransactionsList = ({ transactions }) => (
  <div>
      {transactions.map(transaction => {
          console.log (transaction);
          let {id, value, type, date} = transaction;
          return (
              <ul key={id}>
                  <li>{id}</li>
                  <li>{value}</li>
                  <li>{type}</li>
                  <li>{date}</li>
              </ul>           
          )
      })}
  </div>
)

export default TransactionsList