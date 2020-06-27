import {
    SET_USER,
    SET_NAME
} from '../actions/actionsType'

const initialState = {
    user: {},
    name: 'AmonimoUs',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {        
        case SET_USER:
            console.log('User setado')
            return{
                ...state,
                user: action.payload
            }
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}

export default reducer;