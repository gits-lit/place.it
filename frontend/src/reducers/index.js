import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import BuildingReducer from './BuildingReducer';

export default history =>
  combineReducers({
    building: BuildingReducer,
    router: connectRouter(history),
  });
