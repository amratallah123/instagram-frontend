import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name:'user',
    initialState:{
        userData : {
            name:"Amr atallah",
            userName:"Amr_Atallah",
            email:"amratallah@yahoo.com",
            phone:"01156294084",
            gender:"Male",
            password:""
        },
    },
    reducers:{
        editUser:(state,action)=>{
            state.userData.name = action.payload.nameS;            
        },
        
    },
})

export const {editUser} = userSlice.actions;
export default userSlice.reducer