import { createStore, applyMiddleware, compose,  } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from './reducers';
import {createBrowserHistory} from 'history';
import { routerMiddleware } from 'react-router-redux';
import { verifyAuth } from './actions';


export const history = createBrowserHistory();


export function configStore(initialState) {
    
    

    const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    //store.dispatch(Actions.verifyAuth());
    store.dispatch(verifyAuth())

    return store

}



