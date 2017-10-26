import React from 'react'
import moment from 'moment'

const TransactionsList = ({ transactions }) => (
        <table className="table table-striped table-hover">
                <thead>
                        <tr>
                                <th>Id</th>
                                <th>Value</th>
                                <th>Type</th>
                                <th>Date</th>
                        </tr>
                </thead>
                <tbody>
                        {transactions.map(transaction => {
                                let {id, value, type, date} = transaction;
                                return (
                                        <tr key={id}>
                                                <td>{id}</td>
                                                <td>{value}</td>
                                                <td>{type}</td> 
                                                <td>{moment(date).format('HH:mm - DD.MM.YYYY')}</td>
                                        </tr>
                                )
                        })}   								
                </tbody>
        </table>
)

export default TransactionsList