import React, {useState} from 'react'
import {
    UserDescription,
    Search
} from './styles'
import { Message, Search as SC, Menu } from '@material-ui/icons';
import { Form, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import { setFiltro } from '../store/actions/filtro'
import { connect } from 'react-redux'
import ModalComponent from './modal'
import ModalComponentName from './modalSetName'
function UserArea(props) {
    
    const [filtro, setFiltro] = useState('')

    const avatar = 40;
    
    const changeFiltro = (event) => {
        return new Promise(resolve => {
            const texto = event.target.value;
            resolve(texto)
        })
        .then((texto)=>{
            setFiltro(texto)
            props.onChangeFiltro(texto)
        })
    }
    
    return (
        <UserDescription style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', flex: 1,}}>
            <Search>
                <div style={{flex: 1}}>
                    <img style={{width: avatar, height: avatar, borderRadius: avatar/2}} src={'https://www.dclick.com.br/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'}/>                    
                </div>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <ModalComponent title={'Add Channel'}/>
                    <ModalComponentName title={'Set Name'}/>
                </div>
            </Search>
            </div>
            <div style={{display:'flex', justifyContent: "center", alignItems: 'center'}}>{props.user}</div>
            <div style={{display: 'flex', flex: 1,}}>
                <Search color={'white'} style={{flex: 1, }}>
                    <SC />                
                    <Form.Control size={"sm"} style={{width: '80%'}}type={'text'} onChange={changeFiltro}/>                               
                </Search>            
            </div>
        </UserDescription>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        user: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeFiltro: (filtro) => dispatch(setFiltro(filtro)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserArea)
