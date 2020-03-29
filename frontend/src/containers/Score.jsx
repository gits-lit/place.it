import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Score from '../components/Score';

const ScoreContainer = props => {
  return (
    <Score grade={props.grade} />
  )
};

const mapStateToProps = state => ({
  grade: state.data.grade,
  score: state.data.score
});

export default connect(
  mapStateToProps,
  { }
)(ScoreContainer);
