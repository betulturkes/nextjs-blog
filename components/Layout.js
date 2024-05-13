// Layout.js

import Header from './Header';
import styled from 'styled-components';

const BodyDiv = styled.div`
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif; /* General font family */
    background-image: url('conf_foto.jpg'); /* Background image */
    background-size: cover; /* Cover the entire container */
    background-attachment: fixed; /* Fixed background */
    opacity: 0.9; /* Opacity */
    width: 100vw; /* Set width to cover viewport width */
    height: 100vh; /* Set height to cover viewport height */
`;

const Content = styled.div`
    max-width: 800px;
    margin: auto;
`;

const ContentInner = styled.div`
    padding: 20px;
`;

const Footer = styled.footer`
    background-color: rgba(82, 75, 79, 0.77); /* Daha saydam krem arka plan */
    color: #4e342e; /* Kahverengi metin rengi */
    padding: 20px; /* Kenar boşlukları */
    border-top: 1px solid #8d6e63; /* İnce footer çizgisi */
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const FooterInner = styled.div`
    max-width: 800px;
    margin: auto;
`;

export default ({ title, children }) => (
  <BodyDiv>
    <Header />
    <Content>
      <h1>{title}</h1>
      <ContentInner>{children}</ContentInner>
    </Content>

  </BodyDiv>
);
