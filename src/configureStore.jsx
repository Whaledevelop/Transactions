import { createStore } from 'redux';

import { loadState, saveState } from './localStorage'
import {clearState} from './localStorage'
import transactionsApp from './reducers';

const configureStore = () => {
    const persistedState = loadState()
    let store = createStore(transactionsApp, persistedState);
    store.subscribe(() => {
            console.log(store.getState().visibilityFilters.map(f=> f.active))
            console.log(store.getState().transactions.filter(t => t.id > 10).map(t => t.value))
            saveState({
                    transactions: store.getState().transactions,
                    visibilityFilters: store.getState().visibilityFilters
            });
    })
    clearState();
    return store;
}

export default configureStore;



