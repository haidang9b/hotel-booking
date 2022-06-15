import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import React from 'react'
import './loading.css'
export default function Loading() {
  return (
    <Box className='overlay loader'>
        <CircularProgress  className='center'/>
    </Box>
  )
}
