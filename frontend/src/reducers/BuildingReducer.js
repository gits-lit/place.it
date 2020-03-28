import { CAROUSEL_UPDATE } from '../actions/types';

const initialState = {
  type: '',
  color: ''
};

const BuildingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAROUSEL_UPDATE:
      return {
        ...state,
        type: action.payload.type,
        color: action.payload.color
      };
  default:
      return state;
  }
};

export default BuildingReducer;
