import Config from '../config';

import { UPDATE_TOTAL, CLEAR_DATA, ADD_DATA } from './types';
import { notify, scoreToGrade } from '../utils';

export const getData = (array) => async dispatch => {
  if (!array || array.length == 0) {
    notify('Error', 'There appears to be no buildings!');
    return new Promise( async (resolve, reject) => {
      reject('There appears to be no buildings');
    });
  }
  else {
    dispatch({
      type: CLEAR_DATA,
    });

    const actions = array.map(callApi);
    Promise.all(actions).then(function(values) {
      let totalScore = 0;
      let totalTransitScore = 0;
      let totalWalkingScore = 0;
      let trees = 0
      let carbon = 0;
      let crimes = 0;
      let propVal = 0;
      let tax = 0;
      let parking = 0;
      for(let i = 0; i < values.length; i++) {
        // Calculate grade and score.
        const value = values[i];
        dispatch({
          type: ADD_DATA,
          payload: {
            type: value.params.type,
            name: value.params.name,
            length: value.params.length,
            width: value.params.width,
            height: value.params.height,
            color: value.params.color
          }
        });
        totalScore += value.rating;
        totalTransitScore += value.transit.transit.rating;
        totalWalkingScore += value.transit.walk.rating;
        trees += value.trees.trees;
        carbon += value.carbon.carbon;
        crimes += value.crimes.crimes;
        propVal += value.house.land_value;
        tax += value.house.taxes;
        parking += value.parkingSpaces.spots;
      }
      const score = totalScore / values.length;
      const grade = scoreToGrade(score);
      const transitScore = totalTransitScore / values.length;
      const transitGrade = scoreToGrade(transitScore);
      const walkingScore = totalWalkingScore / values.length;
      const walkingGrade = scoreToGrade(walkingScore);
      // Update the total values
      dispatch({
        type: UPDATE_TOTAL,
        payload: {
          score: score,
          grade: grade,
          trees: trees,
          carbon: carbon,
          crimes: crimes,
          num: values.length,
          propVal: propVal,
          tax: tax,
          parking: parking,
          transitGrade: transitGrade,
          walkingGrade: walkingGrade
        }
      });

    });
  }
}

const callApi = (params) => {
  return new Promise( async (resolve, reject) => {
    try {
      // TODO: Not sure to average length and width or to use hypothenuse
      const radius = (params.length + params.width) / 2
      const response = await fetch(Config.API_URL + '/insight?' +
      `height=${params.height}&lat=${params.lat}&length=${params.length}` +
      `&lng=${params.lng}&occupants=${params.occupancy}&radius=${radius}` +
      `&squareFootage=${params.size}&type=${params.type}&useApis=${Config.USE_APIS}&width=${params.width}`
      , {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (!data) throw new Error('No response from server');
      if (data.error) throw new Error(data.error.message);

      // TODO: ADD TO DATA ARRAY
      // Store data
      data.params = params;
      resolve(data);
    } catch (error) {
      notify('Error', error.message);
      reject(error);
    }
  });
};
