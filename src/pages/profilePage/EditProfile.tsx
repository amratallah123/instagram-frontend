import './EditProfile.css'
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, makeStyles, MenuItem, MenuList, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
const EditProfile = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
        Hello
      </Box>
    </Box>

  </Box>;
};

export default EditProfile;
