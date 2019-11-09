import React from 'react';
import Map from "../map";
import Player from "../player";
import { tiles } from "../../data/maps/1";
import store from "../../config/store";

// import Battle from "../battle";


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
            }}
        >

            <Map />
            <Player />
            {/* <Monster /> */}
            {/* <Battle /> */}
        </div>
    );
}

export default World;