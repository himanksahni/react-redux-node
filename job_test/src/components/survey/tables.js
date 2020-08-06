import React from 'react';
import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Tables = (props) =>{

    return(

                <tr>
                    <td> <strong> {props.survey}</strong></td>
                    <td className="has-text-centered">
                        <button className="btn button is-success is-outlined" 
                                disabled={props.disabled} 
                                onClick={() => props.addSurvey(props.sid)}>

                            <FontAwesomeIcon icon={faPlus} size="xs"/> &nbsp; Assign

                        </button> &nbsp;

                        <button className="btn button is-danger is-outlined"  
                                disabled= {props.surdisabled}
                                onClick={() => props.removeSurvey(props.sid)}>
                                    
                            <FontAwesomeIcon icon={faTrashAlt} size="xs"/> &nbsp; Remove
                        </button>
                    </td>
                </tr>
    )
}

export default Tables;