import * as ActionTypes from '../../constants/actionTypes';
import api from '../../apis/';

export function fetchUser(id) {
  return async dispatch => {
    dispatch(fetchAllDataBegin());

    function onSuccess(response) {
      dispatch(fetchAllDataSuccess(response));
      return response;
    }

    function onFailed(err) {
      dispatch(fetchAllDataFailed(err));
      return err;
    }

    try {
      // const response = await API.getInstructorById(id);
      const response = await api.get(`/instructors/${id}`);
      onSuccess(response.data);
    } catch (err) {
      onFailed(err);
    }
  }
}

export const fetchAllDataBegin = () => ({
  type: ActionTypes.FETCH_USER_BEGIN,
});

export const fetchAllDataSuccess = (data) => ({
  type: ActionTypes.FETCH_USER_SUCCESS,
  payload: data
});

export const fetchAllDataFailed = (error) => ({
  type: ActionTypes.FETCH_DATA_FAIL,
  error: error
})