import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import dataReducer from './dataReducer/index';
import lessonReducer from './lessonReducer';
import * as dataTypes from '../constants/dataTypes';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  lessons: dataReducer(dataTypes.LESSONS),
  // courses: dataReducer('courses')

});

export default rootReducer;
