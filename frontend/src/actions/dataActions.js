import Config from '../config';

import { notify } from '../utils';

export const getData = (array) => async dispatch => {
  if (!array || array.length == 0) {
    notify('Error', 'There appears to be no buildings!');
  }
  else {
    callApi(array[0]);
  }
}

export const callApi = (params) => {
  return new Promise( async (resolve, reject) => {
    try {
      console.log(Config.API_URL);
      const response = await fetch(Config.API_URL + '/insight?' +
      `height=${params.height}&lat=${params.lat}&length=${params.length}` +
      `&lng=${params.lng}&occupants=${params.occupancy}&radius=${params.length}` +
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

      console.log(data);

      // TODO: ADD TO DATA ARRAY
      resolve(data);
    } catch (error) {
      notify('Error', error.message);
      reject(error);
    }
  });
};
