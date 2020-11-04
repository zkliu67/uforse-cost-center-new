import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import { fetchData } from '../../../actions/dataAction';
import { NOTIFICATIONS } from '../../../constants/dataTypes';
import ListView from '../../containers/ListView';

class Notifications extends Component {
  async componentDidMount() {
    await this.props.fetchData(NOTIFICATIONS);
  }

  getListContent = (data) => {
    return {
      title: "Company Notifications",
      warning: data.data.size < 1 ? "No data available" : "",
      data: data.data
    }
  }

  render() {
    const { notifications } = this.props;
    if (notifications.loaded) {
      return (
        <div>
          <ListView data={this.getListContent(notifications.data)} marginRight={true} />
        </div>
      )  
    } else {
      return (
        <p>Loading</p>
      )
    }
  }
}

Notifications.propTypes = {
  fetchData: func.isRequired,
  notifications: object
}

const mapStateToProps = (state) => (
  { notifications: state.notifications, // a list
  }
)

export default connect(mapStateToProps, {fetchData})(Notifications);
