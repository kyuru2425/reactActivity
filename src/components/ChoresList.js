import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ChoresList = (props) => {
  return (
    <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Chore Name</TableCell>
              <TableCell align="right">Chore Description</TableCell>
              <TableCell align="right">Chore Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((prop) => (
              <TableRow
                key={0}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                    {prop.id}
                </TableCell>
                <TableCell align="right">{prop.name}</TableCell>
                <TableCell align="right">{prop.desc}</TableCell>
                <TableCell align="right">{prop.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ChoresList
