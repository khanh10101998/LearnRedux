/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
// import App from './App';
import Main from './src/main';
import {name as appName} from './app.json';
import GetJson from './src/components/getJson';
import ReduxSage from './src/ReduxSaga';

// //redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReduces from './src/reducersSaga';
import DataContainer from './src/containers/SagaContainer';

//redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReduces, applyMiddleware(sagaMiddleware));
const App = () => {
    return(
    <Provider store = {store}>
        <DataContainer/>
    </Provider>
    );
};
sagaMiddleware.run(rootSaga)
AppRegistry.registerComponent(appName, () => App);
