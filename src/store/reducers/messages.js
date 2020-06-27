import { SET_MESSAGE } from '../actions/actionsType'

const initialState = {
    messages: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            console.log(action.payload)
            return {
                ...state,
                messages: action.payload
            }    
        default:
            return state;
    }
}

export default reducer;