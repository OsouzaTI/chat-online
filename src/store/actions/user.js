import {
    SET_USER,
    SET_NAME
} from './actionsType'

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const setName = name => {
    return {
        type: SET_NAME,
        payload: name
    }
}