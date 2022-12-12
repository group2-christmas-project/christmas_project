
import React from "react";
import styled from "styled-components";
// styled components 패키지다운

const LayoutStyles = styled.div`

import styled from "styled-components";

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

const StLayout = styled.div`

  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;


export default Layout;
