import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Html } from '@react-three/drei';

export default function LoaderCompo() {
  return (
    <Html>
       <Box sx={{ display: 'flex', justifyContent:"center", height:"100vh" , alignItems:"center" ,zIndex:100}}>
      <CircularProgress />
    </Box>  
    </Html>
         
 
 
  );
}