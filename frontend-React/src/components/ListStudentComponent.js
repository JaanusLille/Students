import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import StudentService from '../services/StudentService'

const ListStudentComponent = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {

        getAllStudents();
    }, [])

    const getAllStudents = () => {
        StudentService.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteStudent = (studentId) => {
       StudentService.deleteStudent(studentId).then((response) =>{
        getAllStudents();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> Tudengite tabel </h2>
            <Link to = "/add-student" className = "btn btn-success mb-1" > Lisa tudeng </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Tudengi Id </th>
                    <th> Eesnimi </th>
                    <th> Perekonnanimi </th>
                    <th> E-post </th>
                    <th> Valikud </th>
                </thead>
                <tbody>
                    {
                        students.map(
                            student =>
                            <tr key = {student.id}> 
                                <td> {student.id} </td>
                                <td> {student.firstName} </td>
                                <td>{student.lastName}</td>
                                <td>{student.emailId}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/edit-student/${student.id}`} >Uuenda</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteStudent(student.id)}
                                    style = {{marginLeft:"10px"}}> Kustuta</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListStudentComponent
