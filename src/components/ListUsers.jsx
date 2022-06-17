

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';


const LinkItem = styled(Link)`
    text-decoration: none;
    color: black;
`
const DeleteButton = styled.button`
border: none;
outline: none;
background-color: transparent;
`


const Wrapper = styled.div`
    padding: 0px 100px;
`



const ListUsers = ({users}) => {
  return (
    <Wrapper>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">E-mail&nbsp;</TableCell>
            <TableCell align="right">Phone&nbsp;</TableCell>
            <TableCell align="right">City&nbsp;</TableCell>
            <TableCell align="right">Website&nbsp;</TableCell>
            <TableCell align="right">View&nbsp;</TableCell>
            <TableCell align="right">Edit&nbsp;</TableCell>
            <TableCell align="right">Delete&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((element) => (
            <TableRow
              key={element.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {element.username}
              </TableCell>
              <TableCell align="right">{element.name}</TableCell>
              <TableCell align="right">{element.email}</TableCell>
              <TableCell align="right">{element.phone}</TableCell>
              <TableCell align="right">{element.address.city}</TableCell>
              <TableCell align="right">{element.website}</TableCell>
              <TableCell align="right"><LinkItem to={`viewuser/${element.id}`}><RemoveRedEyeIcon /></LinkItem></TableCell>
              <TableCell align="right"><LinkItem to='edituser'><EditIcon /></LinkItem></TableCell>
              <TableCell align="right"><DeleteButton><DeleteIcon /></DeleteButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Wrapper>
  )
}

export default ListUsers