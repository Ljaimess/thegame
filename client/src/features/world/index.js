import React from 'react';
import Map from "../map";
import Player from "../player";
import { tiles } from "../../data/maps/1";
import store from "../../config/store";
import Battle from "../battle/index";

// import Battle from "../battle";

let canBattle = store.getState().battle.canBattle;


const World = props => {
    store.dispatch({
        type: "ADD_TILES",
        payload: {
            tiles,
        }
    })
    return (
        <div
            style={{
                position: "relative",
                width: "800px",
                height: "400px",
                margin: "20px auto",
            }}>

            <Map />
            <Player />
            <Battle />
            {/* {canBattle ? <Battle/> : <h1>{store.getState().player.name}</h1>} */}

            
        </div>
    );
}

export default World;