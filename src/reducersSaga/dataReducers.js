import { ADD, FETCH_DATA,FETCH_SUCCESS,FETCH_FAILED } from "../actions/type";
const dataReduces = (data = [], action) =>{
    switch (action.type){
        case FETCH_SUCCESS:
            // alert(JSON.stringify(action.ReceivedData))
            return action.ReceivedData;
        case FETCH_FAILED:
            return [];
        case ADD:
            return [
                ...data,
                action.newData
            ];
        default:
            return data;
    }
}

export default dataReduces;