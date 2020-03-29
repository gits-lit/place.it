import { ADD_BUILDINGS, ADD_MAP, CAROUSEL_UPDATE, CLEAR_BUILDINGS, FORM_UPDATE, UPDATE_COORDS } from '../actions/types';

const initialState = {
  type: '',
  color: '',
  name: '',
  occupancy: 0,
  length: 0,
  width: 0,
  height: 0,
  size: 0,
  buildings: [],
  lat: '',
  lng: '',
  map: null
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
    case ADD_BUILDINGS:
      const building = {
        type: state.type,
        color: state.color,
        name: state.name,
        occupancy: state.occupancy,
        length: state.length,
        width: state.width,
        height: state.height,
        size: state.size,
        lat: action.payload.lat,
        lng: action.payload.lng
      }
      return {
        ...state,
        buildings: [...state.buildings, building]
      }
    case CLEAR_BUILDINGS:
      return {
        ...state,
        buildings: []
      }
    case UPDATE_COORDS:
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng
      }
  default:
      return state;
  }
};

export default BuildingReducer;
