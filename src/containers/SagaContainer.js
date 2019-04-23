import { connect } from 'react-redux'
import  ReduxSaga  from "../ReduxSaga";

//action
import { addDataAction, fetchDataAction ,  fetchSuccessAction, fetchFailedAction} from '../actions'
const mapStateToProps = (state) => {
    return{
        data: state.dataReduces
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchData: () => {
            dispatch(fetchDataAction());
        },
        onAddData: (newData) => {
            dispatch(addDataAction(newData));
        }
    };
}
const datatContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxSaga);
export default datatContainer;

