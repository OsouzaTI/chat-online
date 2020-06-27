import React from 'react';
import {
    MensagemItem as MSI
} from './styles'

import { connect } from 'react-redux'
import { setUser } from '../store/actions/user'
import { fetchMessages } from '../store/actions/messages'

const cores = require('./colors/default.json')
function MensagemItem(props) {
    
    const handlerUser = () => {
        console.log('handler executado')
        const user = {
            name: props.name,
            message: props.message,
            _key: props._key
        }
        props.onSetUser(user);
        props.onFetchMessages(props._key)
    }
    
    const avatar = 50;
    return (
        <a href={'#'} onClick={handlerUser}>
        <MSI>
            <img style={{width: avatar, height: avatar, borderRadius: avatar/2}} src={'https://www.dclick.com.br/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'}/>
            <div style={{padding: 12}}>
                {props.name}<br/>
                <small style={{color: 'gray'}}>{props._key}</small>
            </div>
        </MSI>
        </a>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSetUser: (user) => dispatch(setUser(user)),
        onFetchMessages: (channel) => dispatch(fetchMessages(channel))
    }
}

export default connect(null, mapDispatchToProps)(MensagemItem)
