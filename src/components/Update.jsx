import { useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";


export function Update() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {id} = useParams();
    const users = useSelector((state)=> state.users);
    const existingUser = users.filter(user => user.id === +id); // coz here data type of user.id is number and id from params is a string so i added +id to convert it to number 
    const {name, email} = existingUser[0];
    const [uname, setUname] = useState(name);
    const [uemail, setUemail] = useState(email);
    

  function HandleSubmit(e){
    e.preventDefault();
    dispatch(updateUser({
        id : id,
        name : uname,
        email : uemail
    }))
    navigate("/")
  }


  return (
    <>
      <div>
        <div className="container fluid">
          <div className="d-grid  p-5 ">
            <div className=" col-6 border bg-secondary text-white p-5">
              <form onSubmit={HandleSubmit}>
                <h3>Update Existing User</h3>
                <div>
                  <dl>
                    <dt>Name : </dt>
                    <dd>
                      <input
                        type="text"
                        name="uname"
                        className="form-control"
                        onChange={(e) => setUname(e.target.value)}
                        value = {uname}
                      />
                    </dd>
                    <dt>Email : </dt>
                    <dd>
                      <input
                        type="'email'"
                        name=" uemail"
                        className="form-control"
                        onChange={(e) => setUemail(e.target.value)}
                        value = {uemail}
                      />
                    </dd>
                  </dl>
                  <div>
                    <button className="btn btn-info">Update</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
