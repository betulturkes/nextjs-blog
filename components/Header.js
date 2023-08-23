import Link from 'next/link';
import styled from "styled-components";

const HeaderDiv = styled.div`
border: 10px solid #f00;
padding: 30px;
display:flex;
gap:20px;
& > span{
    font-size: 30px;
}

;`

const StyledLink = styled(Link)`
color: #fff;
text-decoration: none;
border : ${({border}) =>`${border}px`} solid yellow;
font-size: ${({big}) =>(big ? "20px":"12px")};
&:hover{
    text-decoration: underline;
}`
;


export default () => (
    <HeaderDiv>
        <StyledLink href="/" border={20}>Ana Sayfa</StyledLink>
        <StyledLink href="/about" big>Hakkımızda</StyledLink>

        <span>Ek Açıklamalar</span>
    </HeaderDiv>
    


);