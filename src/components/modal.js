import React, { useState } from 'react'
import {Modal, Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux'
import { addChannel } from '../store/actions/canais'
function ModalComponent(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('')
    const [descricao, setDescricao] = useState('')

    const changeTitle = (event) => {
        const data = event.target.value;
        console.log(data)
        setTitle(data)
    }

    const changeDescription = (event) => {
        const data = event.target.value;
        console.log(data)
        setDescricao(data)
    }

    const createChannel = () => {
        console.log('clicou')
        const channel = {
            name: title,
            message: descricao
        }
        props.onAddChannel(channel);
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
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type={'text'} maxLength={200} value={title} onChange={changeTitle} />
                        <Form.Text className="text-muted">
                        Digite o título de sua tarefa.
                        </Form.Text>
                        <br/>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type={'text'} value={descricao} onChange={changeDescription} />
                        <Form.Text className="text-muted">
                        Digite a descrição.
                        </Form.Text>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={createChannel}>
                    Create
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const mapDispatchToProps = (dispatch) =>{
    return{
        onAddChannel: (channel) => dispatch(addChannel(channel))
    }
}

export default connect(null, mapDispatchToProps)(ModalComponent);