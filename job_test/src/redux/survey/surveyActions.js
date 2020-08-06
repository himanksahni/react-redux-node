import axios from 'axios';
import {FETCH_SURVEY_REQUEST,
        FETCH_SURVEY_SUCCESS,
        FETCH_SURVEY_ERROR,} 
from './surveyTypes';

export const fetchSurveyReq = () => ({
    type: FETCH_SURVEY_REQUEST
})

export const fetchSurveySucc = employee => ({
    type: FETCH_SURVEY_SUCCESS,
    payload: employee
})

export const fetchSurveyErr = err => ({
    type: FETCH_SURVEY_ERROR,
    payload: err
})

export const fetchSurvey = () => (dispatch, getState) => {

    if (!getState.loading){
        dispatch(fetchSurveyReq())
        axios.get('http://localhost:7000/surveys')
        .then(res => {
            dispatch(fetchSurveySucc(res.data))  
        })
        .catch(err => {
            dispatch(fetchSurveyErr(err.message))
        })
    }
}

export const postToBackend = (updatedContent) => (dispatch,getState) =>{
    if (!getState.loading){
        dispatch(fetchSurveyReq())
        axios.post('http://localhost:7000/update', updatedContent)
        .then(res => {
            console.log(res) 
            dispatch(fetchSurveyReq())})
        .catch(err =>{ 
            console.log(err.message)
            dispatch(fetchSurveyErr(err.message))
        })
    }
}