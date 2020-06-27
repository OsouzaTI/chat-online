import styled, { keyframes } from 'styled-components'
const cores = require('./colors/default.json')

export const Home = styled.div`
    height: 100vh;
    font-family: Helvetica, Arial, sans-serif;
    a{
        text-decoration: none;
        color: black;
    }
`;

export const Grid = styled.div`

    display: grid;
    grid-template-columns: 240px auto;
    grid-template-rows: 200px auto 100px;
    grid-template-areas: 
        'UA DA'
        'LA DA'
        'LA MA';
    height: 100vh;
`;

export const Container = styled.div`
    grid-area: LA;
    border-right: thin solid rgba(0, 0, 0, .2);
    border-width: .1;
    display: flex;
    flex-direction: column;
    background-color: ${cores.SIDE_BAR};
    max-height: 100vh;
    overflow-y: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
    /* background-color: red; */
`;

export const UserDescription = styled.div`
    grid-area: UA;
    background-color: rgb(237, 237, 237);
    border-right: thin solid rgba(0, 0, 0, .2);
    border-width: .1;
`;

export const MessageContainer = styled.div`
    grid-area: MA;
    background-color: rgb(237, 237, 237);
    border-top: thin solid rgba(0, 0, 0, .2);
    border-width: .1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MessagemItemBox = styled.div`

    background-color: ${cores.MESSAGE};
    min-height: 50px;
    padding: 10px;
    margin: 10px 20px;
    border-radius: 15px;
    width: 60%;
`;

export const Search = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.color ? props.color : null};
    padding: 0 10px;
`;

export const DataArea = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: DA;
    background-color: rgb(248, 249, 250);
    overflow-y: scroll;
    /* scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    } */
    justify-content: flex-start;
`;

export const MensagemItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 72px;
    background-color: white;
    padding: 10px;
    align-items: center;
    justify-content: flex-start;
    &:hover{
        transition: .2s;
        background-color: rgb(237, 237, 237);
    }
`;

const fadeIn = keyframes`

    0%, 100% { opacity: 0; }
    20%, 80% { opacity: 1; }

`;

export const AlertMessage = styled.div`

    display: flex;
    position: absolute;
    top: 10px;left: 0px;
    /* background-color: red; */
    width: 100vw;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn}  3s linear forwards;

`;