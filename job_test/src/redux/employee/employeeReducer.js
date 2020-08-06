import {FETCH_EMPLOYEE_REQUEST,
        FETCH_EMPLOYEE_SUCCESS,
        FETCH_EMPLOYEE_ERROR,
        CHANGE_EMPLOYEE,
        ASSIGN_EMPLOYEE_SURVEY,
        REMOVE_EMPLOYEE_SURVEY} 
from './employeeTypes';

const initialState = {
    loading: false,
    employee:[],
    empSur:[],
    empAss:[],
    value: -1,
    err:''
}

const empReducer = (state = initialState, action) =>{

    let newSurvey = ""
    let newAss;
    let indx = 0
    let newSurList;
    let newEmpAss;
    let  sid;
    let newEmployees;
    switch(action.type){
        case FETCH_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
            
        case FETCH_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employee: action.payload,
                loading: true
            }
        case FETCH_EMPLOYEE_ERROR:
            return {
                ...state,
                loading: false,
                err: action.payload
            }
        case CHANGE_EMPLOYEE:

            if(action.payload.indx === -1){
                return{ 
                    ...state,
                    empSur:[],
                    empAss:[],
                    value: action.payload.indx
                }
            }
            const employee = state.employee[action.payload.indx]
            let sur = [...action.payload.surveys]
            let surcopy = []
            let assSur=[]
            let empAss = [] 

            for (let i in employee.assSur){
                empAss.push(employee.assSur[i])
            }

            for (let i in sur){
                if (empAss.includes(sur[i].sid)){
                    assSur.push(sur[i])
                }
            }

            for (let i in sur){
                if (!empAss.includes(sur[i].sid)){
                    surcopy.push(sur[i])
                }
            }

            return { 
                ...state,
                empSur:surcopy,
                empAss:assSur,
                value: action.payload.indx
            }
        case ASSIGN_EMPLOYEE_SURVEY:
            sid  = action.payload
            while (indx < state.empSur.length){
                if (state.empSur[indx].sid === sid){
                    newSurvey = state.empSur[indx]
                }
                indx+=1
            }
            newAss = [...state.empAss, newSurvey]
            newSurList = state.empSur.filter(survey => {
                return survey.sid!==sid
            })

            newEmpAss = [...state.employee[state.value].assSur, sid]
            newEmployees = [...state.employee]
            newEmployees[state.value].assSur = newEmpAss

            return{

                ...state,
                employee: newEmployees,
                empSur: newSurList,
                empAss: newAss
                
            }
        case REMOVE_EMPLOYEE_SURVEY:
            sid = action.payload
            while (indx < state.empAss.length){
                if (state.empAss[indx].sid === sid){
                    newSurvey = state.empAss[indx]
                }
                indx+=1
            }
            newSurList = [...state.empSur, newSurvey]
            newAss = state.empAss.filter(survey=>{
            return survey.sid!==sid
            })

            newEmpAss = state.employee[state.value].assSur.filter(assSid=>{
                return assSid !== sid;
            })

            newEmployees = [...state.employee]
            newEmployees[state.value].assSur = newEmpAss
            
            return{
                ...state,
                employee: newEmployees,
                empSur: newSurList,
                empAss: newAss
                
            }

        default: 
            return state
    }
}

export default empReducer;