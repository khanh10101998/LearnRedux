
import { INCREASE, DECREASE, ADD, FETCH_DATA, FETCH_FAILED, FETCH_SUCCESS } from './type'

export const counterIncrease = () => ({ type: INCREASE });
export const counterDecrease = () => ({ type: DECREASE });

// REDUX SAGA
export const fetchDataAction = (count) => {
    return{
        type: FETCH_DATA,
        count
    }
}

export const addDataAction = (newData) => {
    return{
        type: ADD,
        newData: newData
    }
}

// action sent by redux-saga
export const fetchSuccessAction = (receivedData) => {
    return{
        type: FETCH_SUCCESS,
        receivedData
    }
}

export const fetchFailedAction = (error) => {
    return{
        type: FETCH_FAILED,
        error
    }
}

