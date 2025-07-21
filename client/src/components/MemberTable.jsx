import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import TableComponent from "./TableComponent";
import { Link } from "react-router-dom";

const MemberTable = () => {
    const [members, setMembers] = useState([]);
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [flag,setFlag] = useState(false);
    const [deleteFlag,setDeleteFlag] = useState(false);

    const handleChange = async (e, member) => {
        try{
            const res = await axios.patch(`http://localhost:8000/api/members/${member._id}`, { attending: e.target.checked })
        
            setMembers(members.map(m => m._id === member._id ? { ...m, attending: e.target.checked } : m));
            setFilteredMembers(members.filter(member => member.attending === true));
            setFlag(!flag);
    
    }catch(err){
            console.error(err);
        }

    }

    const handleDelete = (id) => {
        setMembers(members.filter(member => member._id !== id));
        setDeleteFlag(!deleteFlag);}

    const fetchMembers = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/members/allmembers');
            setMembers(res.data);
            setFilteredMembers(res.data.filter(member => member.attending === true));
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(  () => {
        fetchMembers();
        console.log("imtirgeeered");
    },[flag,deleteFlag]);

    return (
        <>
        <TableComponent check={true} handleChange={handleChange} handleDelete={handleDelete} data={members}/>
        <Link className="btn btn-primary" to={"/members/new"}>Add Member</Link>
        <TableComponent handleDelete={handleDelete} data={filteredMembers}/>
        </>
        
    )
}

export default MemberTable