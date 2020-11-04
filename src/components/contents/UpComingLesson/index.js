import React, { Component } from 'react';
import {connect} from 'react-redux';
import { object, func, bool } from 'prop-types';
import { LESSONS } from '../../../constants/dataTypes';
import { fetchData } from '../../../actions/dataAction';
import TableView from '../../containers/TableView';

import moment from 'moment';

class UpComingLesson extends Component {

  async componentDidMount() {
    await this.props.fetchData(LESSONS);
  }

  getLessonDetail = (lesson) => {
    // get course name
    // get students name (map function)
    return {
      Date: moment(lesson["start_time"]).format('MM-DD-YYYY'),
      Time: `${moment(lesson["start_time"]).format('HH:mm')} - ${moment(lesson["end_time"]).format('HH:mm')}`,
      Course: lesson.course.name,
      Type: lesson.lesson_type,
      Location: lesson.school_location.name,
      Students: lesson.students.map(student => {
        student.id
      })
    }
  }

  getLessonStudent = async () => {
    
  }

  getTableData = (lessons) => {
    return {
      title: "Upcoming Lessons",
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
