import { Link, useNavigate, useParams } from 'react-router-dom';
import MemberForm from './MemberForm';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
const EditMember = () => {
    const redirect = useNavigate()
    const {id} = useParams();
    const [member, setMember] = useState({});
    const [errors,setErrors] = useState({})
    const [flag,setFlag] = useState(false);

    useEffect(() => {
        const fetchMember = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/members/${id}`);
            setMember(res.data);
        } catch (err) {
            console.error(err);
        }
    }
        fetchMember();
    } , [])
    
    
    const onSubmit = (data) =>{
        axios.patch(`http://localhost:8000/api/members/${id}`,data)
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
        <h1>Edit Member</h1>
        <Link className="btn btn-primary" to={"/"}> Home </Link>
    </div>
        <MemberForm onSubmit={onSubmit} errors={errors} data={member}/>
    </>
  )
}

export default EditMember