import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "./Data";


const userSlice = createSlice ( {
    name : "users",
    initialState : UserList,
    reducers : {
        addUser : (state,action) =>{
           state.push(action.payload);
        },
        updateUser : (state,action) =>{
            const {id,name,email} = action.payload;
            const updateU = state.find(user => user.id == id);
            if(updateU) {
                updateU.name = name;
                updateU.email = email;
            }
        },
        deleteUser : (state,action) =>{
            const{id} = action.payload;
            const deleteU = state.find(user => user.id == id);
            if(deleteU){
                return state.filter(user => user.id !== id);
            }
        }

    }
  })

  export const {addUser,updateUser,deleteUser } = userSlice.actions;
  export default userSlice.reducer;