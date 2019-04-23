import { call, all } from "redux-saga/effects";
import { watchFetchMoview } from './dataSaga';
export default function* rootSaga(){
    yield call(watchFetchMoview);
}