import { CAROUSEL_UPDATE, FORM_UPDATE } from '../actions/types';

const initialState = {
  type: '',
  color: '',
  name: '',
  occupancy: 0,
  length: 0,
  width: 0,
  height: 0,
  size: 0
};

const BuildingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAROUSEL_UPDATE:
      return {
        ...state,
        type: action.payload.type,
        color: action.payload.color
      };
    case FORM_UPDATE:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
  default:
      return state;
  }
};

export default BuildingReducer;
