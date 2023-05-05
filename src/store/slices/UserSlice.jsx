import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            // METHOD : 1.

            // return state.filter((user,id)=>{
            //     if(id!=action.payload) return user;
            //     return;
            // })

            // METHOD : 2.
            state.splice(action.payload,1);
        },
        deleteUser(state,action){
            state.splice(0,state.length);
        }
    }
})

export default usersSlice.reducer;
export const {addUser,removeUser,deleteUser} = usersSlice.actions;