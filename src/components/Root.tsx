import { useState } from "react";
import styled from "styled-components";

import { Chatbox } from "./Chatbox/Chatbox";
import { ThemeControl } from "./Header/ThemeControl";

export const Root = () => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  return (
    <Container darkmode={isDarkmode}>
      <ThemeControl isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
      <Chatbox isDarkmode={isDarkmode} />
    </Container>
  );
};

const Container = styled.div<{ darkmode: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ darkmode }) =>
    darkmode ? "rgba(6, 34, 83, 0.75)" : "#f8f8f8"};
`;
