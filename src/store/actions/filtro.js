import {
    SET_FILTRO
} from './actionsType'

export const setFiltro = (filtro) => {
    return {
        type: SET_FILTRO,
        payload: filtro
    }
}