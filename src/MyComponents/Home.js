import React,{useState,useEffect} from 'react';
import  {Link } from 'react-router-dom';
import axios from "axios";


const Home = () => {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    console.log("My useEffects")
    loadUser();
  },[]);
  const loadUser = async ()=>{
    const result  = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
    // setUsers(result.data.reverse);
   
  };
  const deleteUser = async id =>{
     await axios.delete(`http://localhost:3001/users/${id}`);
     loadUser();
  }
  return (
    <>
    <div className="container">
        <div className="py-4">
            <h1>Home</h1>
            <table class="table">
  <thead>
    <tr className='bg-dark text-white'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>(
      <tr>
        <th scope="row">{index+1}</th>
        <td>{user.name}</td>
        <td>{user.role}</td>
        <td>{user.email}</td>
        <td>
                  <Link class="btn btn-primary mr-2" to={`/user/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/user/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
        {/* <td>
            <Link className='btn btn-primary m-2'to={`/user/${user.id}`}><i class="fa fa-eye" aria-hidden="true"></i>View</Link>
            <Link className='btn btn-primary m-2'><i class="fa fa-pencil" to={`/user/edit/${user.id}`}>Edit</i></Link>
            <Link className='btn btn-danger m-2'><i class="fa fa-trash"onClick={()=>{deleteUser(user.id)}}>Delete</i></Link>
        </td> */}

      </tr>
    ))}
  </tbody>
</table>
            
        </div>
    </div>
    </>
  )
}

export default Home;