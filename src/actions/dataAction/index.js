import * as ActionTypes from '../../constants/actionTypes';
import api from '../../utils/api';

export function fetchData(dataNameAPI) {
  return async dispatch => {
    await dispatch(fetchAllDataBegin(dataNameAPI));

    async function onSuccess(dataName, response) {
      await dispatch(fetchAllDataSuccess(dataName, response));
      return response;
    }

    async function onFailed(dataName, err) {
      await dispatch(fetchAllDataFailed(dataName, err));
      return err;
    }

    try {
      const response = await api.get(`/${dataNameAPI}`);
      await onSuccess(dataNameAPI, response);
    } catch (err) {
      await onFailed(dataNameAPI, err);
    }
  }
}

const fetchAllDataBegin = (dataName) => ({
  type: `FETCH_${dataName}_BEGIN`,
  name: dataName
});

const fetchAllDataSuccess = (dataName, data) => ({
  type: `FETCH_${dataName}_SUCCESS`,
  name: dataName,
  payload: data
});

const fetchAllDataFailed = (dataName, error) => ({
  type: `FETCH_${dataName}_FAIL`,
  name: dataName,
  payload: error
})