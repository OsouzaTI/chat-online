import {
    ADD_CHANNEL,
    SET_CHANNELS
} from '../actions/actionsType'

const initialState = {
    channels: [],
}

const reducer = (state = initialState, action) => {

    switch (action.type) {        
        case SET_CHANNELS:
            return {
                ...state,
                channels: action.payload
            }
        default:
            return state;
    }

}

export default reducer;