import React, { useState } from 'react'
import {
    MessageContainer
} from './styles'
import { Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { addMessage } from '../store/actions/messages'
import { connect } from 'react-redux'

function MessageArea(props) {
    const [message, setMessage] = useState('');
    const sendMessage = async(event) => {
        const key = event.key;
        if(key === 'Enter'){
            if(props.user._key){
                return new Promise(resolve => {
                    const msg = {
                        name: props.name,
                        channel: props.user._key,
                        message: message
                    }
                    resolve(msg);
                })
                .then((msg)=>{
                    props.onAddMessage(msg, msg.channel);
                    setMessage('')
                })
            }else{
                console.log('Usuario nulo')
            }
        }
    }

    const handlerMessage = event => setMessage(event.target.value);

    return (
        <MessageContainer>
            <div style={{
                flex: .8
            }}>
                <Form.Control value={message}
                    type={'text'}
                    onChange={handlerMessage}
                    onKeyUp={sendMessage}/>
            </div>
        </MessageContainer>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        user: user.user,
        name: user.name
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAddMessage: (message, channel) => dispatch(addMessage(message, channel)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageArea)
