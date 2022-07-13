import axios from 'axios';
import React,{useState} from 'react';
// import { unstable_HistoryRouter} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

// import { createBrowserHistory } from "history";

const Adduser = () => {
    let navigate = useNavigate();
    
    const [user,setUser] = useState({
        name:"",
        role:"",
        email:""
    });
    const {name,role,email} = user;
    const onInputChange = e=>{
        setUser({...user,[e.target.name]:e.target.value});
    };
    const onSubmit  = async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user);
        navigate("/")
    }
  return (
    <div className='container'>
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A User</h2>
            <form onSubmit={e=>onSubmit(e)}>
                <div className="form-group">
                    <input type="text" className='form-control form-control-lg' placeholder='Enter Your Name'
                    name='name'value={name} onChange={e=>onInputChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" className='form-control form-control-lg' placeholder='Enter Your Role'
                    name='role'value={role} onChange={e=>onInputChange(e)} />
                </div>
                <div className="form-group">
                    <input type="email" className='form-control form-control-lg' placeholder='Enter Your Email'
                    name='email'value={email} onChange={e=>onInputChange(e)} />
                </div>
                <button className='btn btn-primary btn-block my-4'>Add User</button>
            </form>
        </div>
    </div>
  )
}

export default Adduser