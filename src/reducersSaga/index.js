import { combineReducers } from "redux";
import dataReduces  from "./dataReducers";

const allReducers = combineReducers({
    dataReduces,
});

export default allReducers;