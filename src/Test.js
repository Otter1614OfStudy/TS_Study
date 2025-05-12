import React from "react";
import styled from "styled-components";
import "./Test.css"

const TestContainer = styled.div`
  width: 500px;
  background-color: gray;
`;

const Ptest = styled.p`
  font-weight: bold;
`;

const Ptests = styled.p`
  font-weight: bold;
`;

function Test() {
  return (
   
      <TestContainer>
        <Ptest>안녕하세요 Ptest입니다</Ptest>
        <div className="asd">안녕하세요 asd 입니다다</div>
      </TestContainer>
  );
}

export default Test;