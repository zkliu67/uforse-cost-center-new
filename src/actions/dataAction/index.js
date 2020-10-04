import * as ActionTypes from '../../constants/actionTypes';
import api from '../../utils/api';

export function fetchData(dataNameAPI) {
  return async dispatch => {
    dispatch(fetchAllDataBegin(dataNameAPI));

    function onSuccess(dataName, response) {
      dispatch(fetchAllDataSuccess(dataName, response));
      return response;
    }

    function onFailed(dataName, err) {
      dispatch(fetchAllDataFailed(dataName, err));
      return err;
    }

    try {
      const response = await api.get(`/lessons`);
      onSuccess(dataNameAPI, response);
    } catch (err) {
      onFailed(dataNameAPI, err);
    }
  }
}

export const fetchAllDataBegin = (dataName) => ({
  type: ActionTypes.FETCH_DATA_BEGIN,
  name: dataName
});

export const fetchAllDataSuccess = (dataName, data) => ({
  type: ActionTypes.FETCH_DATA_SUCCESS,
  name: dataName,
  payload: data
});

export const fetchAllDataFailed = (dataName, error) => ({
  type: ActionTypes.FETCH_DATA_FAIL,
  name: dataName,
  payload: error
})