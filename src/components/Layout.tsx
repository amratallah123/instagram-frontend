import { AppBar, Avatar, InputBase } from '@mui/material'
import React from 'react'
import logoImage from '../imgs/Instagram_logo.png'
import avatar from '../imgs/WhatsApp Image 2022-02-05 at 1.28.24 AM.jpeg'
import './styles/layoutStyle.css'
import { alpha,styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#696969',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
export const Layout = () => {
  return (
    <AppBar color='primary' position="sticky">
        <div className='appBar'>
            <Link className='link' to="/"><img   className='logoImage' src={logoImage} alt="logo" /> </Link>
            
            <Search className='search' >
            <SearchIconWrapper>
              <SearchIcon sx={{color:"black"}}/>
            </SearchIconWrapper>
            <StyledInputBase  className='inputSearch'
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div className='linksAppBar'>
            <ul>
            <li><Link to="/"> <HomeIcon /> </Link>  </li>

              <li><a href="hello.html"> <FavoriteBorderIcon /> </a>  </li>
              <li><Link to="/profile"> <Avatar   sx={{ width: 24, height: 24 }}
 src={avatar}/> </Link>  </li>
            </ul>
          </div>
        </div>
    </AppBar>
  )
}
