import { ADD_DATA, CLEAR_DATA, UPDATE_TOTAL } from '../actions/types';

const initialState = {
  grade: '?',
  score: -1,
  data: []
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOTAL:
      return {
        ...state,
        grade: action.payload.grade,
        score: action.payload.score
      }
    case ADD_DATA:
      const data = {
        type: action.payload.type,
        name: action.payload.name,
        length: action.payload.length,
        width: action.payload.width,
        height: action.payload.height,
        color: action.payload.color
      }

      return {
        ...state,
        data: [...state.data, data]
      }
    case CLEAR_DATA:
      return {
        ...state,
        data: []
      }
  default:
      return state;
  }
};

export default DataReducer;
