import { ADD_MESSAGE, SET_MESSAGE } from './actionsType'
import axios from 'axios'

export const setMessages = messages => {
    return {
        type: SET_MESSAGE,
        payload: messages
    }
}

export const addMessage = (message, channel) => {
    console.log(channel)
    return dispatch => {
        axios.post(`channels/${channel}/messages.json`, {...message})
        .then(res => {
            console.log('Mensagem Adiionanda');
            dispatch(fetchMessages(channel))
        })
    }

}

export const fetchMessages = channel => {
    return dispatch => {
        axios.get(`channels/${channel}/messages.json`)
        .then((res)=>{
            const rawData = res.data;
            const messages = []
            for( let message in rawData){
                messages.push({
                    ...rawData[message]
                })
            }
            dispatch(setMessages(messages));
            console.log('Fetch de mensagens pronto!');
        })
    }
}