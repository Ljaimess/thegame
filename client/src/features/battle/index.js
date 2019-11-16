import React, { Component } from 'react';
import "./style.css"
// import store from "../../config/store";

class Battle extends Component {
    state = {}

    handleSabre = () => { console.log("slash") }
    render() {
        return (
            <div>
                <div id="sabre" className="battleScreen">
                    <button onClick={this.handleSabre} >Sabre</button>
                </div>
                <div id="gun" className="battleScreen">
                    <button onClick={console.log("gun")} >Gun</button>
                </div>
            </div>
        );
    }
}

export default Battle;



// let canBattle = store.getState().player.canBattle;



// function handleSabre(e) {

//         console.log("sabre")


// }

// const handleGun= (e) => {
//     return ( console.log("gun") );
// }




// const Battle = () => {
//     return (
//         <div>
//             <div className="battleScreen">
//                 <button onClick={handleSabre()} >Sabre</button>
//             </div>
//             <div className="battleScreen">
//                 <button onClick={handleGun()} >Gun</button>
//             </div>
//         </div>
//     );
// };

// export default Battle;


