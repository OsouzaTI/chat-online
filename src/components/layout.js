import React, { useState } from 'react';
import {
    Grid,
} from './styles'
import UserArea from './UserArea'
import Container from './Container'
import DataContent from './DataContent'
import MessageArea from './MessageArea'
const Layout = () => {
    return (
        <Grid>
            <UserArea />
            <Container />
            <DataContent />
            <MessageArea />
        </Grid>
    );
}

export default Layout;
