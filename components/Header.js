import Link from 'next/link';
import styled from "styled-components";

const HeaderDiv = styled.div`
color: #f00;
border: 10px solid #f00;
padding: 30px;
;`




export default () => (
    <HeaderDiv>
        <Link href="/">Ana Sayfa</Link>
        <Link href="/about">Hakkımızda</Link>
    </HeaderDiv>
    


);