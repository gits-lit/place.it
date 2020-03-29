import { ADD_BUILDINGS, CAROUSEL_UPDATE, FORM_UPDATE } from '../actions/types';

const initialState = {
  type: '',
  color: '',
  name: '',
  occupancy: 0,
  length: 0,
  width: 0,
  height: 0,
  size: 0,
  buildings: []
};

const BuildingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAROUSEL_UPDATE:
      return {
        ...state,
        type: action.payload.type,
        color: action.payload.color,
      };
    case FORM_UPDATE:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    case ADD_BUILDINGS:
      const building = {
        type: state.type,
        name: state.name,
        occupancy: state.occupancy,
        length: state.length,
        width: state.width,
        height: state.height,
        size: state.size
      }
      return {
        ...state,
        buildings: [...state.buildings, building]
      }
  default:
      return state;
  }
};

export default BuildingReducer;
