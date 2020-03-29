import Config from '../config';

import { UPDATE_TOTAL } from './types';
import { notify, gradeToScore, scoreToGrade } from '../utils';

export const getData = (array) => async dispatch => {
  if (!array || array.length == 0) {
    notify('Error', 'There appears to be no buildings!');
  }
  else {
    const actions = array.map(callApi);
    Promise.all(actions).then(function(values) {
      console.log(values);
      // Calculate grade and score.
      let totalScore = 0;
      for(let i = 0; i < values.length; i++) {
        const value = values[i];
        totalScore += gradeToScore(value.rating);
      }
      const score = totalScore / values.length;
      const grade = scoreToGrade(score);
      console.log(score);
      console.log(grade);

      // Update the total values
      dispatch({
        type: UPDATE_TOTAL,
        payload: {
          score: score,
          grade: grade
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
      // TODO: CHANGE USE APIS TO 1
      `&squareFootage=${params.size}&type=${params.type}&useApis=0&width=${params.width}`
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
      resolve(data);
    } catch (error) {
      notify('Error', error.message);
      reject(error);
    }
  });
};
