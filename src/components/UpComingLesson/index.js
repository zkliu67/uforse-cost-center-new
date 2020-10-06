import React, { Component } from 'react';
import {connect} from 'react-redux';
import { object, func, bool } from 'prop-types';
import { LESSONS, STUDENTS, COURSES } from '../../constants/dataTypes';
import { fetchData } from '../../actions/dataAction';
import api from '../../utils/api';
import TableView from '../containers/TableView';

import moment from 'moment';
import { Button } from '@material-ui/core';

class UpComingLesson extends Component {

  async componentDidMount() {
    await this.props.fetchData(LESSONS);
  }

  getLessonDetail = (lesson) => {
    // get course name
    // get students name (map function)
    return {
      Date: moment(lesson["start_time"]).format('MM-DD-YYYY'),
      Time: "time",
      Course: lesson.course.name,
      Type: lesson.lesson_type,
      Location: lesson.school_location.name,
      Students: lesson.lesson_students.map(student => {
        student.student.id
      })
    }
  }

  getLessonStudent = async () => {
    
  }

  getTableData = (lessons) => {
    return {
      tableCols: ["Date", "Time", "Course", "Type", "Location", "Students"],
      data: lessons.data.map(lesson => this.getLessonDetail(lesson)),
    }
    // return lessons.map(lesson => {
    //   lesson
    // })
  }

  render() {
    const { lessons } = this.props;
    if (lessons.loaded) {
      return (
        <TableView data={this.getTableData(lessons.data)} />
      )  
    }
    return <p>Loading...</p>
  }
}

UpComingLesson.propTypes = {
  fetchData: func.isRequired,
  lessons: object,
  classes: object
}

const mapStateToProps = (state) => (
  { lessons: state.lessons, // a list
    students: state.students
  }
)

export default connect(mapStateToProps, {fetchData})(UpComingLesson);
