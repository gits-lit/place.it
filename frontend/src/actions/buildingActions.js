import { CAROUSEL_UPDATE, FORM_UPDATE } from './types';
import buildingTypes from '../assets/building-types.json'

let buildings = []

for (let building in buildingTypes) {
  buildings.push([building, buildingTypes[building]]);
}

export const setBuildingType = (index) =>  async dispatch => {
  const building = buildings[index];
  dispatch({
    type: CAROUSEL_UPDATE,
    payload: {
      // TODO: You might need to change type to an id here.
      type: building[0],
      color: building[1].color
    }
  });
}

export const updateBuildingForm = (key, value) => async dispatch => {
  console.log('updated');
  dispatch({
    type: FORM_UPDATE,
    payload: {
      key: key,
      value: value
    }
  })
}
