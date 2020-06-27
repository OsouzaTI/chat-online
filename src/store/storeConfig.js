import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import FiltroReducer from './reducers/filtro'
import UserReducer from './reducers/user'
import ChannelsReducer from './reducers/canais'
import MessageReducer from './reducers/messages'
const reducers = combineReducers({
    filtro: FiltroReducer,
    user: UserReducer,
    channels: ChannelsReducer,
    messages: MessageReducer
})

const storeConfig = () => {
    return createStore(
        reducers,
        compose(applyMiddleware(thunk))
    )
}

export default storeConfig;
