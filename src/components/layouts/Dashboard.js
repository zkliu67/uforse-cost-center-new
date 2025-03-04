import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import { fetchUser } from '../../actions/adminAction';
import UpComingLesson from '../contents/UpComingLesson';
import Courses from '../contents/Courses';
import Notifications from '../contents/Notifications';
import Onboarding from '../contents/Onboarding';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    "& > div": {
      width: "100vw",
      margin: "0"
    }
  },
  paper: {
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  marginRight: {
    marginRight: theme.spacing(2)
  },
  marginBottom: {
    marginBottom: theme.spacing(2)
  }
});

// get courses list
class Dashboard extends Component {
  
  async componentDidMount() {
    await this.props.fetchUser(1);
  }

  render() {
    const { adminInfo, loaded, loading, error } = this.props.admin;
    const { classes } = this.props;
    if (loaded) {
      return (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <div className={classes.paper}>
                <UpComingLesson admin={adminInfo} />
              </div>
              <div className={classes.paper}>
                <Onboarding />
              </div>
              <Grid container className={classes.marginBottom}>
                <Grid item className={classes.item} xs={12} sm={6}>
                <div className={classes.paper}>
                  <Courses />
                </div>
                </Grid>
                <Grid item className={classes.item} xs={12} sm={6}>
                  <div className={classes.paper}>
                    <Courses />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.item} xs={12} sm={4}>
              <div className={classes.paper}>
                <Notifications marginRight={true} />
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