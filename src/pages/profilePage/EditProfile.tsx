import './EditProfile.css';
import { Avatar, Box, Button, Divider, List, ListItem, ListItemButton, ListItemText, makeStyles, MenuItem, MenuList, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import avatar from '../../imgs/WhatsApp Image 2022-02-05 at 1.28.24 AM.jpeg';
import {MyButton} from'../../components/styledButton';
import { editUser } from '../../Redux/Reducers/userSlice';
const EditProfile = () => {

  const {name} = useSelector((state:RootState)=>state.user.userData);
  const {userName} = useSelector((state:RootState)=>state.user.userData);
  const {email} = useSelector((state:RootState)=>state.user.userData);
  const {phone} = useSelector((state:RootState)=>state.user.userData);
  const {gender} = useSelector((state:RootState)=>state.user.userData);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const[nameS , setName]=useState(String({name}));

  const dispatch = useDispatch();

  const submit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editUser({nameS}));
}

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
  
  return <Box className="parent">

    <Box className="container" mt={8}>
      
      <Box className="options" flex={2} mr={2}>
        <List sx={{display:"inline-block",padding:0,width:"100%"}}>
          <ListItem disablePadding >
            <ListItemButton 
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText sx={{pl:2,pt:1}}>
                Edit Profile
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText sx={{pl:2,pt:1}}>
                Change Password
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText sx={{pl:2,pt:1}}>
                Apps and websites
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton 
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText sx={{pl:2,pt:1}}>
                Email notifications
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton 
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemText sx={{pl:2,pt:1}}>
                Push notifications
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton 
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemText sx={{pl:2,pt:1}}>
                Manage contacts
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton 
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemText sx={{pl:2,pt:1}}>
                Privacy and security
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton 
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
            >
              <ListItemText sx={{pl:2,pt:1}}>
                Login activity
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton 
              selected={selectedIndex === 8}
              onClick={(event) => handleListItemClick(event, 8)}
            >
              <ListItemText sx={{pl:2,pt:1}}>
                Emails for instagram
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton 
              selected={selectedIndex === 9}
              onClick={(event) => handleListItemClick(event, 9)}
            >
              <ListItemText sx={{pl:2,pt:1}}>
                Help
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box className='content' flex={6}>
        <form onSubmit={submit}>
          <Box className='formContent'>
            <Stack direction="row">
              <Avatar src ={avatar}></Avatar>
              <Typography className="rightHand">{name}</Typography>
            </Stack>
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
          <Box>
            <MyButton type="submit" >Submit</MyButton>
          </Box>
        </form>
      </Box>
    </Box>

  </Box>;
};

export default EditProfile;
