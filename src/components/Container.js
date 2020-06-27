import React, { useState, useEffect } from 'react'
import {
    Container as ContainerComponent,
} from './styles'

import MensagemItem from './MensagemItem'

import { connect } from 'react-redux'
import { fetchChannels } from '../store/actions/canais'

function Container(props) {
    
    useEffect(()=>{
        props.onFetchChannels();
    }, [])
    
    const filtroData = (filtro, data) => {
        const aplicaFiltro = (item) => {
            if(item.name){
                if(item.name.includes(filtro)){
                    return true;
                }else{
                    return false;
                }
            }else{
                return true
            }
        }
        const filtered = data.filter(aplicaFiltro);
        const Mensagens = filtered.map((item)=><MensagemItem {...item}/>)
        return Mensagens;
    }

    return (
        <ContainerComponent>
            {filtroData(props.filtro, props.channels)}            
        </ContainerComponent>
    )
}

const mapStateToProps = ({ filtro, channels }) => {
    return {
        filtro: filtro.filtro,
        channels: channels.channels
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchChannels: () => dispatch(fetchChannels())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
