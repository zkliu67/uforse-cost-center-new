import React, { Component } from 'react';
import {connect} from 'react-redux';
import { object, func } from 'prop-types';
import { COURSES } from '../../constants/dataTypes';
import { fetchLesson, fetchData } from '../../actions/dataAction';
import TableView from '../containers/TableView';

class Courses extends Component {
  async componentDidMount() {
    await this.props.fetchData(COURSES);
  }

  getDataDetail = (course) => {
    // get course name
    // get students name (map function)
    return {
      Subject: course.subject.name,
      Name:course.systems.map(sys=>sys.name),
      Tag: course.tags
    }
  }

  getTableData = (courses) => {
    return {
      tableCols: ["Subject", "Name", "Tag", "Type"],
      data: courses.data.map(course=>this.getDataDetail(course))
    }
    // return {
    //   tableCols: ["Subject", "Name", "Tag", "Type"],
    //   data: courses.data.map(course => this.getDataDetail(course)),
    // }
  }

  render() {
    const { courses } = this.props;
    if (courses.loaded) {
      return (
        <div>
          <TableView data={this.getTableData(courses.data)} />
        </div>
      )  
    } else {
      return <p>Loading...</p>
    }
  }
}

Courses.propTypes = {
  fetchData: func.isRequired,
  courses: object
}

const mapStateToProps = state => ({
  courses: state.courses
})

export default connect(mapStateToProps, {fetchData})(Courses);
// export default Courses;
