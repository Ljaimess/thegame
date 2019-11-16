const initialState = {
    canBattle: false,
    hp: 300,
    saber: {
        value: 15,
        uses: 200,
    },
    blaster: {
        value: 50,
        uses: 30,
    },
    attackSpell: {
        value: 100,
        uses: 5,
    },
    healingSpell: {
        value: 25,
        uses: 15,
    },
    
};
const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MAKE_BATTLE":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
};

export default battleReducer;