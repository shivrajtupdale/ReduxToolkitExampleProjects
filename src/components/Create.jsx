import { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  function HandleSubmit(e){
    e.preventDefault();
    dispatch(addUser({id : users[users.length -1].id + 1 ,name , email}));
    navigate()
  }


  return (
    <>
      <div>
        <div className="container fluid">
          <div className="d-grid  p-5 ">
            <div className=" col-6 border bg-secondary text-white p-5">
              <form onSubmit={HandleSubmit}>
                <h3>Add New User</h3>
                <div>
                  <dl>
                    <dt>Name : </dt>
                    <dd>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        value = {name}
                      />
                    </dd>
                    <dt>Email : </dt>
                    <dd>
                      <input
                        type="'email'"
                        name=" email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value = {email}
                      />
                    </dd>
                  </dl>
                  <div>
                    <button className="btn btn-info">Submit</button>
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
