import { styled } from "@mui/system";
import { Button } from '@mui/material';

export const MyButton = styled(Button)({
    backgroundColor:"blue",
    color:"white",
    "&:hover":{
        backgroundColor:"white",
        color:"blue"
    }
})