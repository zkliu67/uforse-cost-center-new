import {FETCH_LESSON_BEGIN, FETCH_LESSON_SUCCESS, FETCH_LESSON_FAIL} from '../../constants/actionTypes';

const defaultState = {
  data: {},
  loading: false,
  loaded: false,
  error: null
}

const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_LESSON_BEGIN: 
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null
      };
    case FETCH_LESSON_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case FETCH_LESSON_FAIL:
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

export default dataReducer;