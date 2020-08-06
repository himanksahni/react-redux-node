import {FETCH_SURVEY_REQUEST,
    FETCH_SURVEY_SUCCESS,
    FETCH_SURVEY_ERROR,} 
from './surveyTypes';

const initialState = {
    loading: false,
    surveys:[],
    assSur:[],
    err:''
}

const surReducer = (state = initialState, action) =>{

    switch(action.type){
        case FETCH_SURVEY_REQUEST:
            return {
                ...state,
                loading: true
            }
            
        case FETCH_SURVEY_SUCCESS:
            return {
                ...state,
                surveys: action.payload,
                loading: false
            }
        case FETCH_SURVEY_ERROR:
            return {
                ...state,
                loading: false,
                err: action.payload
            }

        default: 
            return state
    }
}

export default surReducer;