import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import { fetchUser } from '../../actions/adminAction';
import UpComingLesson from '../UpComingLesson';
import Courses from '../Courses';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

// get courses list
class Dashboard extends Component {
  
  async componentDidMount() {
    await this.props.fetchUser(3);
  }

  render() {
    const { adminInfo, loaded, loading, error } = this.props.admin;
    const { classes } = this.props;
    if (loaded) {
      return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div className={classes.paper}>
                <UpComingLesson admin={adminInfo} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.paper}>
                Company Notifications
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
            <div className={classes.paper}>
              <Courses />
            </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <div className={classes.paper}>
                <Courses />
              </div>
            </Grid>
          </Grid>
        </div>
      )  
    } else {
      return <div>Loading instructor...</div>
    }
      
  }
}

Dashboard.propTypes = {
  fetchUser: func.isRequired,
  admin: object,
  classes: object
}

const mapStateToProps = (state) => ({
  admin: state.admin
})

export default connect(mapStateToProps, {fetchUser})(withStyles(styles)(Dashboard));
// export default Dashboard