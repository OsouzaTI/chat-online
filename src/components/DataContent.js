import React, { useState, useEffect, useRef } from 'react'
import {
    DataArea,
} from './styles'

import { connect } from 'react-redux'
import MessageItemBox from './MessageItemBox'   
import { fetchMessages } from '../store/actions/messages';

import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyDCBVZck9Rh24Y61kRlbQXCgUb7AGukRgU",
    authDomain: "chatonline-f0901.firebaseapp.com",
    databaseURL: "https://chatonline-f0901.firebaseio.com",
    projectId: "chatonline-f0901",
    storageBucket: "chatonline-f0901.appspot.com",
    messagingSenderId: "91644903073",
    appId: "1:91644903073:web:20910cfe06c44220d2fae0"
};

const app = firebase.initializeApp(firebaseConfig);

function DataContent(props) {
    
    const database = app.database().ref().child('channels');    
  
    database.on("value", function(snapshot) {
        props.onFetchMessages(props.user._key)
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
      

    const myRef = useRef(null)
    const scrollEnd = (scrollHeight) => {
        const div = myRef.current;   
        if(div){
            div.scrollTop = scrollHeight;
        }
    }

    return (  
        <DataArea ref={myRef}>
            <MessageItemBox callback={scrollEnd}/>
        </DataArea>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        user: user.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMessages: (channel) => dispatch(fetchMessages(channel))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataContent)
