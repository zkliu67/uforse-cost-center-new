import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLessons } from '../../actions/lessonAction';
import UpComingLesson from '../UpComingLesson';

// get courses list
class Dashboard extends Component {
  // componentDidMount() {
  //   this.props.fetchLessons();
  // }

  render() {
    return (
      <div>
        <UpComingLesson />
      </div>
    )  
  }
}

// const mapStateToProps = (state) => ({
//   lessons: state.lessons
// })

// export default connect(mapStateToProps, {fetchLessons})(Dashboard);
export default Dashboard