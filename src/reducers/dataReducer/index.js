import initialState from '../initialState';

export const fetchDataReducer = (state, action, name) => {
  switch (action.type) {
    case `FETCH_${name}_BEGIN`: 
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null
      };
    case `FETCH_${name}_SUCCESS`:
      // if (name === 'onboarding_steps') {
      //   console.log(action.payload);
      // }
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload.data
      };
      case `FETCH_${name}_FAIL`:
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

export const dataReducer = (reducer, reducerName) => {
  return (state = initialState[reducerName], action) => {
    const { name } = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) {
      return {
        ...state,
        error: new Error(`Invalid data: action: ${name}, reducer: ${reducerName}`)
      }
    }
    return reducer(state, action, name);  
  }
};