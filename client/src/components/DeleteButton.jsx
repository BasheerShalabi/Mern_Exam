import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const DeleteButton = (props) => {
    const redirect = useNavigate();
    const { id , deleteHandler } = props;

    const handleDelete = (deleteHandler) => (e) => {
        axios.delete(`http://localhost:8000/api/members/${id}`)
            .then(res => {
                redirect('/');
                deleteHandler(id);
            })
            .catch(err => {
                console.error(err);
            });
        }

  return (
    <button className="btn btn-primary" onClick={handleDelete(deleteHandler)}> Delete</button>
  )
}

export default DeleteButton