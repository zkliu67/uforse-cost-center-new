import {FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL} from '../../constants/actionTypes';
import initialState from '../initialState';

const defaultState = {
  data: {},
  loading: false,
  loaded: false,
  error: null
}

const fetchDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_DATA_BEGIN: 
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload.data
      };
      case FETCH_DATA_FAIL:
        return {
          ...state,
          loading: false,
          loaded: false,
          error: action.payload.error
        }
    default:
      return state;
  }
};

const dataReducer = (reducerName) => {
  return (state, action) => {
    const { name } = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) {
      return {
        ...defaultState,
        error: new Error('Invalid data resources')
      }
    }
    return fetchDataReducer(state, action);  
  }
};

export default dataReducer;