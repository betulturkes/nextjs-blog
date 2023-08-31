import Link from 'next/link';
import styled from "styled-components";

const StyledLink = styled(Link)`

color: #fff;
text-decoration: none;
font-size: 16px;
font-weight: bold;
&:hover{
    color: rgba(255,255,255,0.5)
}`
;






export default ({children, href}) =>
{
    return(
        <StyledLink href={href} border={20}>{children}</StyledLink>
    );
};