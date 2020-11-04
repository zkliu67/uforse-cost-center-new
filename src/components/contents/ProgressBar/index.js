import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {} from 'prop-types';

class ProgressBar extends Component {
  async componentDidMount() {
    const progress = await axios.get('https://data.heroku.com/dataclips/jgzwpysjhxgwathasxmesmykiunb.json');
    console.log(progress.data);
  }
  render() {
    return (
      <div>
        ProgressBar
      </div>
    )
  }
}

ProgressBar.propTypes = {
}

export default ProgressBar;