import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchBar from "material-ui-search-bar";

import img from '../../assets/images/7.jpg'
import { Link } from 'react-router-dom';
import { baseUrl } from '../Constant/ServerDetails';

const useStyles = makeStyles({
  // root: {
  //   width: '100%',
  // },
  // container: {
  //   maxHeight: 440,
  // },
  table: {
    minWidth: 350,
  },
});
export default function Paginations() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState('');
  

  const fetchUsers = async () => {
      try {
         await axios({
              method: 'get',
              url: `${baseUrl}api/stage2`,
              headers: { 'Content-Type': 'application/json'}
            })
              .then((users) => {
                  setUser(users.data);
                  // console.log(users)
                  setIsLoading(false);
              });
          
      } catch (error) {
          console.log("fetching data error", error)
      }
  }

  useEffect(() => {
    fetchUsers();
  },[])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const requestSearch = (searchVal) => {
    if (searchVal === '') {
      fetchUsers();
    }
    const filteredUser = user.filter((row) => {
      return row.user?.childName?.toLowerCase().includes(searchVal.toLowerCase());
    });
    setUser(filteredUser)
  };
  
  const cancelSearch = () => {
    setSearched('');
    fetchUsers();
  };

  return (
    <>
    {isLoading ? (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    ) : (
    <Paper className={classes.root}>
    <SearchBar
    value={searched}
    onChange={(searchVal) => requestSearch(searchVal)}
    onCancelSearch={() => cancelSearch()}
  />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
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
          {user.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((usr, index) => (
            <TableRow key={usr?._id}>
              <TableCell component="th" scope="row">
               {index + 1}
              </TableCell>
              <TableCell className="img-cell"><img src={usr?.user?.image} alt="image" style={{width:140, height:150, borderRadius:50}} /></TableCell>
              <TableCell> {usr?.user?.childName}</TableCell>
              <TableCell>{usr?.user?.age}</TableCell>
              <TableCell>{usr?.votes}</TableCell>
              <TableCell align="right"><Link to={"/profile/"+usr._id}> <Button color="primary" variant="contained">
            Vote
          </Button> </Link>
          </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={user.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    )}
    </>
  );
}