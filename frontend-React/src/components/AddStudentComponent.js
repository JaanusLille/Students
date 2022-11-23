import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import StudentService from '../services/StudentService'

const AddStudentComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateStudent = (e) => {
        e.preventDefault();

        const student = {firstName, lastName, emailId}

        if(id){
            StudentService.updateStudent(id, student).then((response) => {
                history.push('/students')
            }).catch(error => {
                console.log(error)
            })

        }else{
            StudentService.createStudent(student).then((response) =>{

                console.log(response.data)
    
                history.push('/students');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        StudentService.getStudentById(id).then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error => {
            console.log(error)
        })
        // eslint-disable-next-line
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Uuenda tudeng</h2>
        }else{
            return <h2 className = "text-center">Lisa tudeng</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Eesnimi :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Sisesta eesnimi"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Perekonnanimi :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Sisesta perekonnanimi"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> E-post :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Sisesta E-post"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateStudent(e)} >Lisa </button>
                                <Link to="/students" className="btn btn-danger" style = {{marginLeft:"10px"}}> Loobu </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddStudentComponent
