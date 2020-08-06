import { combineReducers } from 'redux';
import empReducer from './employee/employeeReducer';
import surReducer from './survey/surveyReducers';

const mainReducer = combineReducers({
    employee: empReducer,
    survey: surReducer
})

export default mainReducer;