import { combineReducers } from 'redux';

import coffeeAppReducer from '../components/CoffeeApp/coffeeAppSlice';

export default combineReducers({
  coffeeApp: coffeeAppReducer,
});
