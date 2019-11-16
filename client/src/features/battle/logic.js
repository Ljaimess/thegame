import store from "../../config/store";

const initiateBattle = () => {
    return ( 
        console.log("battle"),
        store.dispatch({
            type: "MAKE_BATTLE",
            payload: {
                canBattle: "true"
            }
        })
     );
}
 
export default initiateBattle;