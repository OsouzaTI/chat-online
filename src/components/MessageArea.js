import React, { useState } from 'react'
import {
    MessageContainer,
    AlertMessage as ALM
} from './styles'
import { Form, Alert } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { addMessage } from '../store/actions/messages'
import { connect } from 'react-redux'
import { InfoOutlined } from '@material-ui/icons'

export function AlertMessage(type, message){
    return (
        <ALM>  
            <div style={{width: '50%'}}>
                <Alert variant={type} role={'alert'}>
                    <InfoOutlined />    {message}
                </Alert>
            </div>          
        </ALM>
    )
}

function MessageArea(props) {
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('');
    
    const sendMessage = async(event) => {
        const key = event.key;
        if(key === 'Enter'){
            if(props.user._key && props.user.name){
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
                setShow(true)
                setTimeout(() => {
                    setShow(false)
                }, 5000);
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
                {show ? AlertMessage('danger', 'Digite um nome(set Name) e ou escolha um canal'):null}
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
