import { createStore } from 'redux';

import { loadState, saveState, clearState } from './localStorage'
import transactionsApp from './reducers';

const configureStore = () => {
    const persistedState = loadState()

    let store = createStore(transactionsApp, persistedState);

    store.subscribe(() => {
            console.log (store.getState());
            saveState({
                    transactions: store.getState().transactions
            });
    })
    //clearState();
    return store;
}

export default configureStore;



