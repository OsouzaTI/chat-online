import React from 'react'
import {
    Home as HomeScreen,
} from './styles'
import Layout from './layout'
import storeConfig from '../store/storeConfig'
import { Provider } from 'react-redux'
import axios from 'axios'
const store = storeConfig();
axios.defaults.baseURL = 'https://chatonline-f0901.firebaseio.com/'

function Home(props) {
    return (
        <Provider store={store}>
            <HomeScreen>
                <Layout />
            </HomeScreen>
        </Provider>
    )
}

export default Home

