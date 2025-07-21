import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from "./Deletebutton";
import { useEffect } from "react";

const MemberDetails = () => {

    const [member, setMember] = useState({});
    const redirect = useNavigate();
    const { id } = useParams();

    const fetchMember = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/members/${id}`);
            setMember(res.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchMember()
    }, [])
    
    return (
        <div>
            <h2 className=" m-4">Member Name :    {member.fullname}</h2>
            <h2 className=" m-4">Email :    {member.email}</h2>
            <h2 className=" m-4">Details :    {member.details}</h2>

            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                    <Link  className="btn btn-primary" to={`/members/edit/${member._id}`}>Edit</Link>
                    <DeleteButton id={member._id} deleteHandler={() => redirect('/')} />
                </div>
                <Link  className="btn btn-primary" to={`/`}>Go home</Link>
            </div>
        </div>
    )
}

export default MemberDetails