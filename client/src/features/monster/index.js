import React from 'react';

import monster from "./monster2.gif";

const Monster = props => {
    return ( 
        <div className="monster"
            style={{
                position: "absolute",
                // top: props.position[1],
                // left: props.position[0],
                backgroundImage: `url("${monster}")`,
                backgroundPosition: props.spriteLocation,
                width: "40px",
                height: "40px",
                backgroundSize: "320px 160px"
            }}
        />
     )
}
export default Monster;