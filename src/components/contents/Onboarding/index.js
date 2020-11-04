import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import { fetchData } from '../../../actions/dataAction';
import { ONBOARDING } from '../../../constants/dataTypes';
import ListView from '../../containers/ListView';

class Onboarding extends Component {
  async componentDidMount() {
    await this.props.fetchData(ONBOARDING);
  }

  getListContent = (data) => {
    return {
      title: "Onboarding Steps",
      warning: data.data.size < 1 ? "No data available" : "",
      data: data.data
    }
  }

  render() {
    const { onboardings } = this.props;
    if (onboardings.loaded) {
      return (
        <div>
          <ListView data={this.getListContent(onboardings.data)}/>
        </div>
      )  
    } else {
      return (
        <p>Loading</p>
      )
    }
    
  }
}

Onboarding.propTypes = {
  fetchData: func.isRequired,
  onboardings: object
}

const mapStateToProps = (state) => (
  { onboardings: state.onboardings, // a list
  }
)

export default connect(mapStateToProps, {fetchData})(Onboarding);
