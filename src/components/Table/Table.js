import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import img from '../../assets/images/7.jpg'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export default function DataTable() {
    const [user, setUser] = useState([]);
    const [vote, setVote] = useState(0);
    const [count, setCount] = useState(1);
    const classes = useStyles();

    const fetchUsers = async () => {
        try {
           await axios({
                method: 'get',
                url: 'http://localhost:3003/api/votes',
                headers: { 'Content-Type': 'application/json'}
              })
                .then((users) => {
                    setUser(users.data);
                    // console.log(user);
                });
            
        } catch (error) {
            console.log("fetching data error", error)
        }
    }

    useEffect( async () => {
       await fetchUsers();
    },[])


return (
    <div className={classes.section}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell >Age</TableCell>
            <TableCell>Votes</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((usr) => (
            <TableRow key={usr._id}>
              <TableCell component="th" scope="row">
                {count}
              </TableCell>
              <TableCell> {usr.user.childName}</TableCell>
              <TableCell>{usr.user.age}</TableCell>
              <TableCell>{usr.votes}</TableCell>
              <TableCell align="right"><Button color="primary" variant="contained">
            Vote
          </Button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}