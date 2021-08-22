import { produce } from 'immer'
import createReducer from '../ReducerUtils'
const initialState = {
   arrFavorites:[]
    
}
const FavoritesFunctions = {
    setArrFavorites(state, action) {
        state.arrFavorites = action.payload
    },
  
}
export default produce((state, action) => createReducer(state, action, FavoritesFunctions), initialState);


