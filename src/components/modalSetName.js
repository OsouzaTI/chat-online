import React, { useState } from 'react'
import {Modal, Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux'
import { setName as setNickName } from '../store/actions/user'
function ModalComponentName(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('')

    const changeName = (event) => {
        const data = event.target.value;
        console.log(data)
        setName(data)
    }

    const _setName = () => {
        console.log('clicou')
        props.onSetName(name);
        handleClose()
    }
    
    return (
        <>
            <Button variant={'link'} onClick={handleShow}>
                {props.title}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Tasks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type={'text'} maxLength={16} value={name} onChange={changeName} />
                        <Form.Text className="text-muted">
                        Digite seu nick.
                        </Form.Text>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={_setName}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const mapDispatchToProps = (dispatch) =>{
    return{
        onSetName: (name) => dispatch(setNickName(name))
    }
}

export default connect(null, mapDispatchToProps)(ModalComponentName);