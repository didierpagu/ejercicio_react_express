
/*Este componente muestra el saldo Total*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

 class SaldoTotal extends React.Component {
  constructor(props, context) {    
    super(props, context);
    this.state = {}
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3" style={{color:"red"}}>
            El saldo total es : $ {this.props.saldototal}
          </Typography>
          <Typography component="p">
          
          </Typography>
        </Paper>
      </div>
    );
  }
}

SaldoTotal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SaldoTotal);