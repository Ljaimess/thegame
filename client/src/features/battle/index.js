import React from 'react';
import "./style.css"



function banana() {
    // e.preventDefault();
    console.log('The link was clicked.');
}


const Battle = () => {
    return (
        <div>
            <div className="battleScreen">
                <button onClick={banana} >Sabre</button>
            </div>
        </div>
    );
};

export default Battle;


