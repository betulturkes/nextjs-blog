import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    font-family: sans-serif;
    background-color: #333;
    color: #fff;
    
    
}
`;



export default function App({ Component, pageProps }) {
    return (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
    );
}