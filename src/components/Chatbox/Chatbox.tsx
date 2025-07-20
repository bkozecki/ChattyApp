import styled from "styled-components";

import { Chat } from "../Chat/Chat";
import { Detail } from "../Detail/Detail";
import { List } from "../List/List";
import { Margin } from "../UI/Margin/Margin";

type ChatboxProps = {
  isDarkmode: boolean;
};

export const Chatbox = ({ isDarkmode }: ChatboxProps) => {
  return (
    <ChatboxComponent darkmode={isDarkmode}>
      <List />
      <Margin $right="1rem" />
      <Chat />
      <Margin $right="1rem" />
      <Detail />
    </ChatboxComponent>
  );
};

const ChatboxComponent = styled.div<{ darkmode: boolean }>`
  height: 90%;
  width: 90%;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  flex-direction: row;
  backdrop-filter: blur(19px) saturate(180%);
  background-color: ${({ darkmode }) =>
    darkmode ? "rgba(17, 25, 40, 0.75)" : "#fff"};
  border: ${({ darkmode }) =>
    darkmode ? "1px solid #090644" : "1px solid #ededed"};
  color: ${({ darkmode }) => darkmode && "#fff"};
`;
