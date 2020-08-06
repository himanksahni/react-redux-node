import React from 'react';
import AssignedSurveys from './assigned_surveys';
import SurveyList from './survey_list';
import { connect } from 'react-redux';
import { assignEmployeeSurvey, removeEmployeeSurvey  } from '../../redux'

class Survey extends React.Component{

    constructor(props){
        super(props);
        this.assignSurvey = this.assignSurvey.bind(this)
        this.removeSurvey = this.removeSurvey.bind(this)
    }

    assignSurvey(sid){
        this.props.assignEmpSurvey(sid)
    }

    removeSurvey(sid){
        this.props.removeEmpSurvey(sid)
    }

    render(){
        return(
            <div className="columns">
                    <SurveyList addSurvey = {this.assignSurvey}/>
                    <AssignedSurveys assSurveys={this.props.empAss} removeSurvey={this.removeSurvey}/>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employee.employee,
        empSur: state.employee.empSur,
        empAss: state.employee.empAss,
        value: state.employee.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
        assignEmpSurvey: sid => dispatch(assignEmployeeSurvey(sid)),
        removeEmpSurvey: sid => dispatch(removeEmployeeSurvey(sid)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Survey)