import React, { useEffect, useState } from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import EmployeeModal from './EmployeeModal';

function EmployeeListComponent()
 {
    const [text] = useTypewriter({
        words: ["Details","List","Info"],
        loop : true,
        typeSpeed:120,
        deleteSpeed:90
    })

    const[employees,setEmployees]=useState([]);
    const[selectedEmployee,setSelectedEmployee] = useState(null);

    useEffect(()=>{
        EmployeeService.getAllEmployees().then(res=>
        {
            setEmployees(res.data);
        })
    },[])



    const deleteEmployee=(id)=>{
        EmployeeService.deleteEmployee(id).then(res=>{
            EmployeeService.getAllEmployees().then(res=>{
                setEmployees(res.data);
            }).catch(error=>{
                console.log(error);
            })
        })
    }


    const viewEmployee = (employeeId)=>
    {
       const employee = employees.find(emp=> emp.id === employeeId);

       if(employee)
       {
        setSelectedEmployee(employee);
       }
       else
       {
        alert("Employee Not Found");
       }
    }

    const closeModal=()=>{
        setSelectedEmployee(null);
    }


  return (
    <div className= 'container mt-5'>

        <h4 className='text-center'>Employee {text} <Cursor/> </h4>

        <div className='row mt-3'>

            <Link to="add-employee" className='btn btn-warning col-md-2 mb-3' >Add Employee</Link>

            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>DOJ</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                        {
                            return <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.doj}</td>
                                <td>{employee.dept.deptName}</td>
                                <td>{employee.dept.designation}</td>
                                <td>
                                    <button className='btn btn-success' onClick={()=>viewEmployee(employee.id)}>View</button>
                                    <Link to={`/update-employee/${employee.id}`} className='btn btn-primary ms-3'>update</Link>
                                    <button className='btn btn-danger ms-3' onClick={()=>deleteEmployee(employee.id)}> Delete</button>
                                </td>
                            </tr>
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
        <EmployeeModal 
            employee = {selectedEmployee} closeModal = {closeModal}
        />
    </div>
  )
}

export default EmployeeListComponent
