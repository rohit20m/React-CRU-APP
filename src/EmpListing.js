import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmpListing() {
    const [empData, setEmpData] = useState(null);
    const navigate = useNavigate();
    const { empid } = useParams();

    const loadDetails = (id) => {
        navigate("/employee/details/" + id)
    }

    const loadEdit = (id) => {
        navigate("/employee/edit/" + id)
    }

    const deleteUser =  (id) => {
        fetch("http://localhost:8000/employee/" + id, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((response) => {
                // toast.error("User Deleted Successfully")
                alert("User Deleted Successfully")
                console.log(response);
                getUserDetails()
            })
        })
    };

    const getUserDetails =  () => {
        fetch("http://localhost:8000/employee")
            .then((result) => {
                return result.json();
            })
            .then((response) => {
                setEmpData(response);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <>
            <div className='container'>
                <div className='card'>
                    <div className='card-title'>
                        <h2 className='text-center'>Employee Details</h2>
                    </div>

                    <div className='card-body'>
                        <div>
                            <Link className='btn btn-primary float-end mb-2' to="employee/create">Add New User</Link>
                        </div>
                        <table className='table table-bordered table-dark table-striped'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    {/* <td>ID</td> */}
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Action</td>
                                </tr>
                            </thead>

                            <tbody>
                                {empData &&
                                    empData.map((item) => (
                                        <tr key={item.id}>
                                            {/* <td>{item.id}</td> */}
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <a onClick={() => { loadEdit(item.id) }} className='btn btn-warning me-2'>Edit</a>
                                                <a onClick={() => { loadDetails(item.id) }} className='btn btn-primary me-2'>View</a>
                                                <a onClick={() => { deleteUser(item.id) }} className='btn btn-danger'>Delete</a>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmpListing;
