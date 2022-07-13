import React,{useState,useEffect} from 'react';
import axios from 'axios';
// import { unstable_HistoryRouter,useParams } from 'react-router-dom';
import {useNavigate,useParams} from 'react-router-dom';

const Edituser = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [user,setUser] = useState({
        name:"",
        role:"",
        email:""
    });
    const {name,role,email} = user;
    const onInputChange = e=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit  = async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`,user);
        navigate("/")
    };
    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
       
      }
  return (
    <div className='container'>
       <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Edit A User</h2>
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
                <button className='btn btn-primary btn-block my-4'>Update User</button>
            </form>
        </div>
    </div>
  )
}

export default Edituser