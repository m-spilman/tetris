// import { PAUSE, RESUME, MOVE_RIGHT, MOVE_LEFT, MOVE_DOWN, ROTATE, RESTART, GAME_OVER } from "../actions";
import { defaultState } from "../utils"


 const dispatchTable = {
    PAUSE : (state, action) =>{

    },
    RESUME : (state, action) =>{

    },
    MOVE_RIGHT : (state, action) =>{

    },
    MOVE_LEFT : (state, action) =>{

    },
    MOVE_DOWN : (state, action) =>{

    },
    ROTATE : (state, action) =>{

    },
    RESTART : (state, action) =>{

    },
    GAME_OVER : (state, action) =>{

    }
  
}

const gameReducer = ( state = defaultState(), action) =>{
    return dispatchTable[action.type] ?
    dispatchTable[action.type (state, action)]
    : state

}
export default gameReducer


