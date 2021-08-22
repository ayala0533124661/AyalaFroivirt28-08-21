
import { combineReducers } from 'redux';
import weather from './reducers/weather'
import favorites from './reducers/favorites'

export default combineReducers({
    weather,
    favorites,
})