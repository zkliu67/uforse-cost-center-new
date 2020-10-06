import React from 'react';
import { object } from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const TableView = ({data}) => {
  const classes = useStyles();
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {data.tableCols.map((col, idx) => {
              if (idx === 0) {
                return <StyledTableCell key={idx}>{col}</StyledTableCell>
              } 
              return <StyledTableCell key={idx} align="right">{col}</StyledTableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((row, idx) => (
            <StyledTableRow key={idx}>
              {data.tableCols.map((col, idx) => {
                if (idx === 0) {
                  return <StyledTableCell component="th" scope="row">
                    {row[col]}
                  </StyledTableCell>
                } else {
                  return <StyledTableCell align="right">{row[col]}</StyledTableCell>
                }
              })}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableView.propTypes = {
  data: object
}

export default TableView
