import { UPDATE_TOTAL } from '../actions/types';

const initialState = {
  grade: '?',
  score: -1
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOTAL:
      return {
        ...state,
        grade: action.payload.grade,
        score: action.payload.score
      }
  default:
      return state;
  }
};

export default DataReducer;
