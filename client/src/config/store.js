import { createStore, combineReducers } from "redux";
import playerReducer from "../features/player/reducer";
import mapReducer from "../features/map/reducer";
import battleReducer from "../features/battle/reducer";
import crystalReducer from "../features/battle/reducer"


const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    battle: battleReducer,
    crystal: crystalReducer,
    
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;