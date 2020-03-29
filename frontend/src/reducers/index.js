import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import BuildingReducer from './BuildingReducer';
import DataReducer from './DataReducer';

export default history =>
  combineReducers({
    building: BuildingReducer,
    data: DataReducer,
    router: connectRouter(history),
  });
