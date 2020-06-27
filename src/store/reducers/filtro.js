import {
    SET_FILTRO
} from '../actions/actionsType'

const initialState = {
    filtro: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {        
        case SET_FILTRO:
            console.log(action.payload)
            return{
                ...state,
                filtro: action.payload
            }

        default:
            return state;
    }
}

export default reducer;