import { FETCH_USER_BEGIN, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from '../../constants/actionTypes';

const defaultState = {
  adminInfo: null,
  error: null,
  loading: false,
  loaded: false
}

const adminReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER_BEGIN:
      return {
        ...state,
        loaded: false,
        loading: true
      }
    case FETCH_USER_SUCCESS: 
      return {
        ...state,
        adminInfo: action.payload,
        loaded: true,
        loading: false
      };
    case FETCH_USER_FAILED:
      return {
        ...state, 
        error: action.error,
        loaded:false,
        loading:false
      }
    default:
      return state;
  }
};

export default adminReducer;