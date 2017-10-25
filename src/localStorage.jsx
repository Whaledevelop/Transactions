const initialTransactions = {
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
]}

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return initialTransactions;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {}
}

export const clearState = (state) => {
    try {
        localStorage.clear();
    } catch (err) {}
}

