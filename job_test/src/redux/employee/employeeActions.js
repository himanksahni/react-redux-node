import axios from 'axios';
import {FETCH_EMPLOYEE_REQUEST,
        FETCH_EMPLOYEE_SUCCESS,
        FETCH_EMPLOYEE_ERROR,
        CHANGE_EMPLOYEE,
        ASSIGN_EMPLOYEE_SURVEY,
        REMOVE_EMPLOYEE_SURVEY} 
from './employeeTypes';

export const fetchEmployeeReq = () => ({
    type: FETCH_EMPLOYEE_REQUEST
})

export const fetchEmployeeSucc = employee => ({
    type: FETCH_EMPLOYEE_SUCCESS,
    payload: employee
})

export const fetchEmployeeErr = err => ({
    type: FETCH_EMPLOYEE_ERROR,
    payload: err
})

export const changeEmployee = (indx, surveys) => ({
    type: CHANGE_EMPLOYEE,
    payload: {indx: indx, surveys: surveys}
})

export const assignEmployeeSurvey = sid => ({
    type: ASSIGN_EMPLOYEE_SURVEY,
    payload: sid
})

export const removeEmployeeSurvey = sid => ({
    type: REMOVE_EMPLOYEE_SURVEY,
    payload: sid
})



export const fetchEmployee = () => (dispatch, getState) => {

    if (!getState.loading){
        dispatch(fetchEmployeeReq())
        axios.get('http://localhost:7000/employees')
        .then(res => {
            dispatch(fetchEmployeeSucc(res.data))  
        })
        .catch(err => {
            dispatch(fetchEmployeeErr(err.message))
        })
    }
}