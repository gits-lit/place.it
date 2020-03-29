import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Verdict from '../components/Verdict';

const VerdictContainer = props => {
  return (
    <Verdict tips={props.tips} grade={props.grade} score={props.score}/>
  )
};

const mapStateToProps = state => ({
  grade: state.data.grade,
  score: state.data.score,
  tips: state.data.tips
});

export default connect(
  mapStateToProps,
  { }
)(VerdictContainer);
