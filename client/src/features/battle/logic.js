import store from "../../config/store";

const initiateBattle = () => {
    return ( 
        console.log("battle"),
        store.dispatch({
            type: "MOVE_PLAYER",
            payload: {
                canBattle: true
            }
        })
     );
}
 
export default initiateBattle;