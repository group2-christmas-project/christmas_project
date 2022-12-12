import React from "react";
import styled from "styled-components";
// styled components 패키지다운

const LayoutStyles = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return <LayoutStyles>{children}</LayoutStyles>;
};

export default Layout;
