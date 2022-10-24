import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ContactList = ({data, handleRemove, handleUpdate}) => {
  return (
    <div>
        <h1>Conatctus Component</h1>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Message</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((prop) => (
              <TableRow
                key={0}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                    {prop.id}
                </TableCell>
                <TableCell align="right">{prop.firstName}</TableCell>
                <TableCell align="right">{prop.lastName}</TableCell>
                <TableCell align="right">{prop.email}</TableCell>
                <TableCell align="right">{prop.message}</TableCell>
                <TableCell align="right"><button type='button' id={prop.id} onClick={handleRemove}>Remove</button><button type='button' id={prop.id} onClick={handleUpdate}>Update</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ContactList
