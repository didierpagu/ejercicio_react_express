
/*Este componente dibuja la tabla y envia el saldo total al componente SaldoTotal ,
tambien realiza el llamado al servidor HTTP donde se traen los datos a dibujar en la tabla*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SaldoTotal from './SaldoTotal';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
const styles = theme => ({
  root: {
    width: '40%',
    marginTop: theme.spacing.unit * 10,
    marginLeft:theme.spacing.unit * 60,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const columnData = [
  { id: "1", numeric: false, disablePadding: false, labelcolumna: "Denominacion Billetes"},
  { id: "2", numeric: true, disablePadding: false, labelcolumna: "# Billetes" },
  { id: "3", numeric: true, disablePadding: false, labelcolumna: "Total ($)" }, 
];

 class App extends React.Component {
  constructor(props, context) {
    super();
      this.state = {
        datos:[],
        sumatotal:0  
      }        

    axios.get('https://mysql-nodejs-rest-api-iqsaavpkkm.now.sh')
    .then(response=> {
    console.log(response);
    let total=0
      this.setState({datos:response.data})
      this.state.datos.map(row => total=parseFloat(total,10)+parseFloat(row.denominacion*row.cantidad,10) )
      this.setState({sumatotal:total})
    })
    .catch(error=> {
     console.log(error);
    })

  setInterval(myTimer ,20000);
  function myTimer() {
    console.log("llamado api")
    axios.get('https://mysql-nodejs-rest-api-iqsaavpkkm.now.sh')
    .then(response=> {
      console.log(response);
    })
    .catch(error=> {
      console.log(error);
    })    
  }
}

  render(){
  const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" align="center">
            Billetera Virtual
          </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {
                columnData.map(column => {
                  return (
                    <TableCell key= {column.id} numeric={column.numeric}>{column.labelcolumna}</TableCell>
                  )
                })
              }     
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.datos.map(row => {
              return (
                <TableRow key={row.id}>  
                  <TableCell component="th" scope="row">  {row.denominacion}     </TableCell>
                  <TableCell numeric>{row.cantidad}</TableCell>
                  <TableCell numeric>{row.denominacion*row.cantidad}</TableCell>                  
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <SaldoTotal saldototal={this.state.sumatotal}/>
      </Paper>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
