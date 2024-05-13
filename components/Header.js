// Header.js

import styled from 'styled-components';
import StyledLink from './Button';

const HeaderDiv = styled.div`
  background-color: rgba(82, 75, 79, 0.77); /* Daha saydam krem arka plan */
  color: #4e342e; /* Kahverengi metin rengi */
  padding: 20px; /* Kenar boşlukları */
  border-bottom: 1px solid #8d6e63; /* İnce header çizgisi */
`;



const HeaderInner = styled.div`
  max-width: 800px;
  margin: auto;
`;


const Nav = styled.nav`
  display: flex;
  justify-content: space-between; /* Butonları eşit boşluklarla dağıt */
  align-items: center; /* Dikey olarak ortala */
`;

export default () => (
  <HeaderDiv>
    <HeaderInner>
      <Nav>
        <StyledLink href="/">Ana Sayfa</StyledLink>
        <StyledLink href="/about">Konferans Sistemi Hakkında</StyledLink>
        <StyledLink href="/FileUpload">Dosya Yükleme</StyledLink>
        <StyledLink href="/contact">İletişim</StyledLink>
        
      </Nav>
    </HeaderInner>
  </HeaderDiv>
);