// Button.js

import Link from 'next/link';
import styled from "styled-components";



const StyledLink = styled(Link)`
  color: rgba(0,0,0,50); /* Koyu gri metin rengi */
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    color: #212121; /* Daha koyu gri hover durumunda */
  }
`;

export default ({ children, href }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};
