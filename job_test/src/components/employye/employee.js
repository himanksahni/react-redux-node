import React from 'react';
import Survey from '../survey/survey';
import { connect } from 'react-redux';
import { fetchEmployee, changeEmployee, fetchSurvey, postToBackend  } from '../../redux'



class Employee extends React.Component{
    constructor(props){
        super(props);
        this.changeEmp = this.changeEmp.bind(this)
    }
    componentDidMount(){
        this.props.fetchEmployees()
        this.props.fetchSurveys()
 
    }
    changeEmp(e){
        const indx = parseInt(e.target.value)
        this.props.changeEmployees(indx, this.props.surveys)
    }


    render(){
    return(
        <div>
            <div className="columns is-centered top-margin">
                <div className="employee has-text-centered">
                <h3 className="title is-4">Select Employees</h3>
                    <div className="select">
                        <select onChange={this.changeEmp} value={this.props.value}>
                            <option value={-1}>Select Employee</option>
                            { this.props.employees.map((employee,i) => {
                                return <option key ={i} value={i}>{employee.name}</option>
                            })}
                        </select>
                        </div>
                </div>
            </div>

            <Survey/>

            <div className="btn has-text-centered is-centered">
                <button onClick={()=>this.props.postToBackend({
                                                                employee:this.props.employees,
                                                                surveys:this.props.surveys
                                                                    })} 
                        className="button is-success">Done</button>
            </div>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employee.employee,
        surveys: state.survey.surveys,
        assSurvey: state.survey.assSur,
        empSur: state.employee.empSur,
        empAss: state.employee.empAss,
        value: state.employee.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
        fetchEmployees: () => dispatch(fetchEmployee()),
        fetchSurveys: () => dispatch(fetchSurvey()),
        changeEmployees: (indx, surveys) => dispatch(changeEmployee(indx, surveys)),
        postToBackend: (updatedContent) => dispatch(postToBackend(updatedContent))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
