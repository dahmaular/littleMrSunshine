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
    minWidth: 350,
  },
});


export default function DataTable() {
    const [user, setUser] = useState([]);
    const [vote, setVote] = useState(0);
    const [count, setCount] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    
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
                    console.log(users)
                   setIsLoading(false);
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
    <h1>
      Our Contestants
    </h1>
    {isLoading ? (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    ) : (
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell></TableCell>
            <TableCell >Full name</TableCell>
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
              <TableCell style={{alignContent:'center', alignItems:'center', alignSelf:'center'}}><img src={usr.user.image} alt="image" style={{width:140, height:150, borderRadius:50}} /></TableCell>
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
    )}
    </div>
  );
}