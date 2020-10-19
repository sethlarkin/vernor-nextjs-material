import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
});

function createData(name, polyurethane, eps) {
  return { name, polyurethane, eps };
}

const rows = [
  createData('Glass', 'Direct-Size Hexcel', 'Direct-Size Hexcel'),
  createData('Resin',  	"Y2K Solar Polyester" , "Epoxy (35% more flexible)"),
  createData('Foam', "Polyurethane", "2 lb. EPS"),
  createData('Stringer', "Bass wood", "Bass, Poplar, PVC"),
  createData('Fins', "Futures Fins ", "Futures Fins"),
];

export default function AcccessibleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Polyurethane</TableCell>
            <TableCell align="right">EPS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.polyurethane}</TableCell>
              <TableCell align="right">{row.eps}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
