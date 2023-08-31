import Header from './Header';
import styled from 'styled-components';

const BodyDiv = styled.div`
    margin : 0;
    padding: 0;
`;

const Footer = styled.footer`
    background-color: #000;
    padding: 20px;
    position: fixed;
    bottom: 0;
    width: 100vw;
`;

const Content = styled.div`
    padding: 20px;
`;

const H1 = styled.h1`
    padding: 20px
;`

export default({title, children}) => (
    <BodyDiv>
        <Header/>
        <h1>{title}</h1>
        <div style = {{padding: "20px", margin:"20px"}}>{children}</div>
        <Footer>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by Vercel
                
            </a>
        </Footer>
    </BodyDiv>
);