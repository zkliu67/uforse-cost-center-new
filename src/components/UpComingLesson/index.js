import React, { Component } from 'react';
import {connect} from 'react-redux';
import { object, func, bool } from 'prop-types';
import { LESSONS } from '../../constants/dataTypes';
import { fetchData } from '../../actions/dataAction';
import { fetchLessons } from '../../actions/lessonAction';
import TableView from '../containers/TableView';

class UpComingLesson extends Component {

  async componentDidMount() {
    await this.props.fetchData(LESSONS);
  }

  // getLessonList = async () => {
  //   await this.props.fetchLessons();
  // }

  render() {
    const { lessons, loaded, loading, error } = this.props;
    if (loaded) {
      return (
        <TableView data={lessons} />
      )  
    }
    
  }
}

UpComingLesson.propTypes = {
  fetchData: func.isRequired,
  lessons: object,
  loading: bool,
  loaded: bool,
  error: object,
  classes: object
}

const mapStateToProps = (state) => (
  { lessons: state.lessons.data,
    loading: state.lessons.loading,
    loaded: state.lessons.loaded,
    error: state.lessons.error
  }
)

export default connect(mapStateToProps, {fetchData})(UpComingLesson);
