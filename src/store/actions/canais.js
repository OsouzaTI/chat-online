import { ADD_CHANNEL, SET_CHANNELS } from './actionsType'
import axios from 'axios'

export const setChannels = channels => {
    return {
        type: SET_CHANNELS,
        payload: channels
    }
}

export const addChannel = channel => {

    return dispatch => {
        axios.post(`/channels.json`, {...channel})
        .then((res)=>{
            console.log('Canal criado');
            dispatch(fetchChannels());
        })
    }

}

export const fetchChannels = () => {

    return dispatch => {
        axios.get('/channels.json')
        .then((res)=> {            
            const rawChannels = res.data;
            const channels = []
            for(let channel in rawChannels){
                channels.push({
                    ...rawChannels[channel],
                    _key: channel
                });
            }
            dispatch(setChannels(channels))
        })
    }

}