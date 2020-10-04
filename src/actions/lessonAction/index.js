import {FETCH_LESSON_BEGIN, FETCH_LESSON_SUCCESS, FETCH_LESSON_FAIL} from '../../constants/actionTypes';
import api from '../../utils/api';

export function fetchLessons() {
  return async dispatch => {
    dispatch(fetchLessonBegin());
    try {
      // const response = {data: {data: [{},{}], total: 0}};
      const response = await api.get('/lessons');
      dispatch(fetchLessonSuccess(response));
      return response;
    } catch (err) {
      dispatch(fetchLessonFail(err));
      return err;
    }
  }
}

export const fetchLessonBegin = () => ({
  type: FETCH_LESSON_BEGIN
});

export const fetchLessonSuccess = response => ({
  type: FETCH_LESSON_SUCCESS,
  payload: response.data
});

export const fetchLessonFail = error => ({
  type: FETCH_LESSON_FAIL,
  error: error
});