import React from 'react';
import Tables from './tables';
import { connect } from 'react-redux';

class SurveyList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search:"",
            
        }
        this.changeSearch = this.changeSearch.bind(this)
    }
    changeSearch(e){
        const value = e.target.value
        this.setState({
            search: value
        })
    }

    render(){
        const surveys = this.props.empSur;
        let filteredSur = surveys.filter(survey =>{
            return survey.name.indexOf(this.state.search) !== -1
        })
        return(
                <div className="column is-centered has-text-centered">
                    <h3 className="title is-4">Survey List</h3>
                    <div className="field">
                        <label className="level-left label is-inline"> Search</label>
                            <input className="input is-inline-block" value={this.state.search} onChange={this.changeSearch} type="text" placeholder="Search Surveys"/>
                        </div>
                        <div className="table-container">
                            <table className="table is-bordered is-striped is-narrow is-fullwidth">
                                <tbody>
                                    {filteredSur.map( (survey) => {
                                            return <Tables survey={survey.name} 
                                            surdisabled ={"disabled"} 
                                            addSurvey = {this.props.addSurvey} 
                                            sid={survey.sid} 
                                            key={survey.sid}/>
                                    })
                                }
                            </tbody>
                            </table>
                        </div>
                    </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        empSur: state.employee.empSur,
    }
}


export default connect(mapStateToProps)(SurveyList)