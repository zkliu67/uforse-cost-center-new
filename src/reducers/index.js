import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {dataReducer, fetchDataReducer} from './dataReducer/index';
import adminReducer from './adminReducer';
// import lessonReducer from './lessonReducer';
import * as dataTypes from '../constants/dataTypes';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  // lessons: dataReducer(dataTypes.LESSONS),
  // courses: dataReducer(dataTypes.COURSES),
  // students: dataReducer(dataTypes.STUDENTS),
  lessons: dataReducer(fetchDataReducer, dataTypes.LESSONS),
  courses: dataReducer(fetchDataReducer, dataTypes.COURSES),
  notifications: dataReducer(fetchDataReducer, dataTypes.NOTIFICATIONS),
  onboardings: dataReducer(fetchDataReducer, dataTypes.ONBOARDING),
  admin: adminReducer
  // courses: dataReducer('courses')

});

export default rootReducer;
