import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";


export default function handleMovement(player) {

    function getNewPostion(direction) {
        const oldPos = store.getState().player.position
        // eslint-disable-next-line default-case
        switch (direction) {
            case "west":
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
            case "east":
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
            case "north":
                return [oldPos[0], oldPos[1] - SPRITE_SIZE]
            case "south":
                return [oldPos[0], oldPos[1] + SPRITE_SIZE]
        }
    }

    function observeBounderies(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
            (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
            ? newPos : oldPos
    }

    function observeImpassable(oldPos, newPos) {
        return 
    }

    function dispatchMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPostion(direction)

        store.dispatch({

            type: "MOVE_PLAYER",
            payload: {
                position: observeBounderies(oldPos, getNewPostion(direction))

                
            }
        })
    }

    function handleKeyDown(e) {
        e.preventDefault()
        switch (e.keyCode) {
            case 37:
                return dispatchMove("west")
            case 38:
                return dispatchMove("north")
            case 39:
                return dispatchMove("east")
            case 40:
                return dispatchMove("south")
            case 65:
                return dispatchMove("west")
            case 87:
                return dispatchMove("north")
            case 68:
                return dispatchMove("east")
            case 83:
                return dispatchMove("south")
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener("keydown", (e) => {
        handleKeyDown(e)
    })

    return player
}