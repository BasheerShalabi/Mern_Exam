import { Link } from "react-router-dom";
import DeleteButton from "./Deletebutton";
const TableComponent = (props) => {
    const {check , data , handleChange , handleDelete} = props;
    const rows = data.map((item, index) => (
        <tr key={index}>
            {check ? <th><input type="checkbox" onChange={(e)=>handleChange(e,item)} defaultChecked={item.attending}/></th> : null}
            <td><Link to={`/members/${item._id}`}>{item.fullname}</Link></td>
            <td>{item.attending ? "Present" : "Absent"}</td>
            <td><DeleteButton id={item._id} deleteHandler={handleDelete}/></td>
        </tr>
    ))
  return (
    <table className="table">
            <thead>
                <tr>
                    {check ? <th scope="col">#</th> : null}
                    <th scope="col">Name</th>
                    <th scope="col">Attendance</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
  )
}

export default TableComponent