import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAILED } from "../actions/type";
//saga effects
import { put, takeLatest } from "redux-saga/effects";
import {Api} from './api';

function* fetchData(){
    console.log("function fetch data");
    try{
       
       const receivedData = yield Api.getDataFromApi(10);
       
        // console.log(JSON.stringify(receivedData));
        
        yield put({ type: FETCH_SUCCESS, ReceivedData: receivedData });
        console.log("function fetch data ko loi");
    } catch(error){
        console.log("function fetch data err:  "+ error);
        yield put({ type:FETCH_FAILED, error });
    }
}

export function* watchFetchMoview(){
    yield takeLatest(FETCH_DATA, fetchData);
}