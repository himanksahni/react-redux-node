import React from 'react';
import Tables from './tables';
import { connect } from 'react-redux';


class AssignedSurveys extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search:""
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

        const assignedSurveys = this.props.empAss;
        let filteredSur = assignedSurveys.filter(survey =>{
            return survey.name.indexOf(this.state.search) !== -1
        })
        return(
                <div className="column is-centered has-text-centered">
                    <h3 className="title is-4">Assigned Surveys</h3>
                    <div className="field">
                        <label className="level-left label is-inline"> Search</label>
                            <input className="input is-inline-block" value={this.state.search} onChange={this.changeSearch} type="text" placeholder="Search Surveys"/>
                    </div>

                    <div className="table-container">
                            <table className="table is-bordered is-striped is-narrow is-fullwidth">
                                <tbody>
                                    {filteredSur.map( (survey) => {
                                                return <Tables survey={survey.name} 
                                                                key={survey.sid} 
                                                                removeSurvey={this.props.removeSurvey} 
                                                                sid={survey.sid}
                                                                disabled="disabled"/>
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
        empAss: state.employee.empAss,
    }
}

export default connect(mapStateToProps)(AssignedSurveys)