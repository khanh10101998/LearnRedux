
import {INCREASE, DECREASE} from '../actions/type'

const initialState = 10;

export default function (state = initialState, actions) {
  switch (actions.type) {
    case INCREASE:
    return state + 1;

    case DECREASE:
      return state-1;
   
    default:
      return state;
  }
}