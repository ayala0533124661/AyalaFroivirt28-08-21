import { produce } from 'immer'
import createReducer from '../ReducerUtils'
const initialState = {
    arrDays: [],
    currentCity: "tel aviv",
    currentTemp: 0,
    currentWeather:""
}
const weatherFunctions = {
    setArrDays(state, action) {
        state.arrDays = action.payload
    },
    setCurrentCity(state, action) {
        state.currentCity = action.payload
    },
    setCurrentTemp(state, action) {
        state.currentTemp = action.payload.temp
        state.currentWeather = action.payload.weather
    },
}
export default produce((state, action) => createReducer(state, action, weatherFunctions), initialState);


