import { createStore } from 'redux';

import { loadState, saveState } from './localStorage'
import {clearState} from './localStorage'
import transactionsApp from './reducers';

const configureStore = () => {
    const persistedState = loadState()
    let store = createStore(transactionsApp, persistedState);
    store.subscribe(() => {
            console.log(store.getState())
            saveState({
                    transactions: store.getState().transactions,
                    visibilityFilters: store.getState().visibilityFilters
            });
    })
    console.log (store.getState());
    clearState();
    return store;
}

export default configureStore;



