
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

deleteUser

export function Home(){
    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch();

    function HandleDelete(id){
        dispatch(deleteUser({
            id : id
        }))
    }
    
    return (
        <>
        <div className="container fluid">
            <h2 >Crud App with JSON Server</h2>
            <Link to ="/create" className="btn btn-success">Create +</Link>

            <div>
                <table className= "table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`edit/${user.id}`} className="btn btn-primary">Edit</Link>
                                        <button onClick={() => HandleDelete(user.id)} className="btn btn-danger ms-2">Delete</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
        </>
    )
}