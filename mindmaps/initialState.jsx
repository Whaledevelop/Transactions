export const initialState = {
    transactions: [
        {id: 1, value: 20000, type: 'income', date: '2016-06-08T11:30'},
        {id: 2, value: 1100, type: 'consumption', date: '2017-01-12T13:10'},
        {id: 3, value: 900, type: 'income', date: '2017-03-24T12:00'},
        {id: 4, value: 200, type: 'consumption', date: '2017-05-29T19:30'},
        {id: 5, value: 100, type: 'income', date: '2017-07-17T18:30'},
        {id: 6, value: 3200, type: 'consumption', date: '2017-09-09T18:30'},
        {id: 7, value: 2100, type: 'income', date: '2017-09-22T11:30'},
        {id: 8, value: 400, type: 'consumption', date: '2017-10-02T14:30'},
        {id: 9, value: 1700, type: 'income', date: '2017-10-09T16:30'},
        {id: 10, value: 3000, type: 'consumption', date: '2017-10-18T21:30'}
    ],
    visibilityFilters: [
        {id: 1, name: 'income', text:'Income', filterBy:'type', value: 'income', className: 'btn btn-success', active: false},
        {id: 2, name: 'consumption', text: 'Consumption', filterBy:'type', value: 'consumption', className: 'btn btn-warning', active: false},
        {id: 3, name: 'lastMonth', text: 'Last Month', filterBy:'date', value: 1, unit:'month', className: 'btn btn-info', active: false},
        {id: 4, name: 'moreThan1000', text: 'More than 1000 rubles', filterBy: 'value', value: 1000, unit: 'more', className: 'btn btn-primary', active: false}
    ]
}