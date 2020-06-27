import React, {useState, useEffect, useRef} from 'react'
import {
    MessagemItemBox as MSIB
} from './styles'
import { connect } from 'react-redux'

function MessageItemBox(props) {
    const myRef = useRef()
    const [scrollHeight , setScrollHeight] = useState(0)
 
    useEffect(() => {

        const div = myRef.current;   
        if(div){
            setScrollHeight(div.scrollHeight)
            console.log(scrollHeight)
        }
        props.callback(scrollHeight);

    })

    return (
        <div ref={myRef} style={{
            marginBottom: 250,
        }}>
            {
                props.messages.map((item, index)=><MSIB key={index.toString()}><b>{item.name}</b>:  {item.message}</MSIB>)
            }
        </div>
    )
}


const mapStateToProps = ({ user, messages }) => {
    return {
        user: user.user,
        messages: messages.messages
    }
}

export default connect(mapStateToProps, null)(MessageItemBox)
