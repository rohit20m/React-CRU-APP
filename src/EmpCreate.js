import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmpCreate() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [active, setActive] = useState(true);
    // const [validation, setvalidation] = useState(false);
    const [nameValidation, setNameValidation] = useState(false);
    const [emailValidation, setEmailValidation] = useState(false);
    const [phoneValidation, setPhoneValidation] = useState(false);
    const notify = ()=>{
        toast("hi")
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const empData = { name, email, phone, active }

        fetch("http://localhost:8000/employee", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empData)
        }).then((response) => {
            // toast.success("User Added Succeefully")
            alert("User Added Succeefully")
            console.log(response)
            notify();
            navigate("/")
        }).catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='container' onSubmit={handleSubmit}>
                        <div className='card' style={{ "textAlign": "left" }}>
                            <div className='card-title'>
                                <h2 className='text-center'>Create Employee</h2>
                            </div>

                            <div className='card-body'>
                                <div className='row'>
                                    {/* <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>ID</label>
                                            <input className='form-control' type='text' value={id} onChange={(e)=>{setId(e.target.value)}} />
                                        </div>
                                    </div> */}

                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Name</label>
                                            <input className='form-control' type='text' value={name} onBlur={() => { setNameValidation(true) }} onChange={(e) => { setName(e.target.value) }} />
                                            {name.length === 0 && nameValidation && <span className='text-danger'>Please Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Email</label>
                                            <input className='form-control' type='text' value={email} onBlur={() => { setEmailValidation(true) }} onChange={(e) => { setEmail(e.target.value) }} />
                                            {email.length === 0 && emailValidation && <span className='text-danger'>Please Enter the email</span>}
                                        </div>
                                    </div>

                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Phone</label>
                                            <input className='form-control' type='text' value={phone} onBlur={() => { setPhoneValidation(true) }} onChange={(e) => { setPhone(e.target.value) }} />
                                            {phone.length === 0 && phoneValidation && <span className='text-danger'>Please Enter the phone number</span>}
                                        </div>
                                    </div>

                                    <div className='col-lg-12'>
                                        <div className='form-check'>
                                            <input type='checkbox' className='form-check-input' value={active} onChange={(e) => { setActive(e.target.checked) }} />
                                            <label className='form-check-label'>Is Active</label>
                                        </div>
                                    </div>

                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <button className='btn btn-success me-2' type='submit'>Create</button>
                                            <Link to="/" className='btn btn-primary'>Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EmpCreate
