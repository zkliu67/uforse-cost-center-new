import React from 'react';
import { object } from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    lineHeight: 0.5,
    fontWeight: 600,
    fontSize: '0.9rem'
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
    lineHeight: 0.3
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.common.white
  }
}))

const TableView = ({data}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>{data.title}</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
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
                {
                  data.tableCols.map((col, idx) => {
                    console.log(row);
                    return <StyledTableCell key={idx} component="th" scope="row">
                      {row[col]}
                    </StyledTableCell>
                  })
                //   data.tableCols.map((col, idx) => {
                //   if (idx === 0) {
                //     return <StyledTableCell key={idx} component="th" scope="row">
                //       {row[col]}
                //     </StyledTableCell>
                //   } else {
                //     return <StyledTableCell key={idx} align="right">{row[col]}</StyledTableCell>
                //   }
                // })
              }
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
};

TableView.propTypes = {
  data: object
}

export default TableView
