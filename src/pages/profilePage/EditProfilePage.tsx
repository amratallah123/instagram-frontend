import { Avatar, Box, Stack, Typography } from '@mui/material';
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import {MyButton} from'../../components/styledButton';
import avatar from '../../imgs/WhatsApp Image 2022-02-05 at 1.28.24 AM.jpeg';
import { editUser } from '../../Redux/Reducers/userSlice';
import './EditProfilePage.css';

export const EditProfilePage = () => {
    const {name} = useSelector((state:RootState)=>state.user.userData);
    const {userName} = useSelector((state:RootState)=>state.user.userData);
    const {email} = useSelector((state:RootState)=>state.user.userData);
    const {phone} = useSelector((state:RootState)=>state.user.userData);
    const {gender} = useSelector((state:RootState)=>state.user.userData);
    const[nameS , setName]=useState(String({name}));

    const dispatch = useDispatch();
  
    const submit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(editUser({nameS}));
  }
  return (
    <Box className='content'>
        <form onSubmit={submit}>
          <Box className="userBox">
              <Avatar  className="avatar" src ={avatar}></Avatar>
              <Typography ml={7}>{name}</Typography>
          </Box>
          <Box className='formContent'>
              <label>Name</label>
              <input type="text" defaultValue={name} className="rightHand"
              onChange={(e) => setName(e.target.value)}></input>
          </Box>
          <Box className='formContent'>
              <label>Username</label>
              <input type="text" defaultValue={userName} className="rightHand"></input>
          </Box>
          <Box className='formContent'>
              <label>Email</label>
              <input type="text" defaultValue={email} className="rightHand"></input>
          </Box>
          <Box className='formContent'>
              <label>Phone number</label>
              <input type="text" defaultValue={phone} className="rightHand"></input>
          </Box>
          <Box className='formContent'>
              <label>Gender</label>
              <input type="text" defaultValue={gender} className="rightHand"></input>
          </Box>
          <Box className='button'>
            <MyButton type="submit" >Submit</MyButton>
          </Box>
        </form>
    </Box>
  )
}
