import React, { useState } from 'react'
import { useEffect } from 'react'
import {useParams } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 100px;
`



const ViewUser = () => {
    let {id} = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        loadUser()
    },)

    const loadUser = async () => {
        const response = await fetch(`http://localhost:8000/users/${id}`)
        const data = await response.json()
        setUser(data)
    }
   
    

  return (
    <Wrapper>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">E-mail&nbsp;</TableCell>
            <TableCell align="right">Phone&nbsp;</TableCell>
            <TableCell align="right">City&nbsp;</TableCell>
            <TableCell align="right">Company&nbsp;</TableCell>
            <TableCell align="right">Website&nbsp;</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.username}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{user.address.city}</TableCell>
              <TableCell align="right">{user.company.name}</TableCell>
              <TableCell align="right">{user.website}</TableCell>
              
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
    </Wrapper>
  )
}

export default ViewUser