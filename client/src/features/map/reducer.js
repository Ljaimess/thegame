
const initialState = {
    tiles: [],

    name: "monster1",
    hp: 100,
    claws: {
        value: 30,
        uses: 300,
    },
    acidBreath: {
        value: 50,
        uses: 30,
    },

};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TILES":
            return {
                ...action.payload
            }
        default:
            return state
    }
};

export default mapReducer;