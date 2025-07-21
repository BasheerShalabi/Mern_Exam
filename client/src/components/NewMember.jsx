import { useNavigate , Link } from 'react-router-dom';
import MemberForm from './MemberForm';
import axios from 'axios'
import { useState } from 'react';
const NewMember = () => {
    const redirect = useNavigate()
    const [errors,setErrors] = useState({})

    const onSubmit = (data) =>{
        axios.post('http://localhost:8000/api/members',data)
        .then(res =>{
            redirect('/')
        })
        .catch(err => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }

  return (
    <>
    <div className='d-flex justify-content-between align-items-center'>
        <h1>New Member</h1>
        <Link className="btn btn-primary" to={"/"}> Home </Link>
    </div>
    <MemberForm onSubmit={onSubmit} errors={errors} data={{fullname:"" , email:"" , gender:"male" , details :""}}/>
    </>
  )
}

export default NewMember