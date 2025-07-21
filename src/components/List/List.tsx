import styled from "styled-components";

import { ChatList } from "../ChatList/ChatList";
import { Margin } from "../UI/Margin/Margin";
import { UserInfo } from "../UserInfo/UserInfo";

export const List = () => {
  return (
    <ListWrapper>
      <UserInfo />
      <Margin $bottom="1rem" />
      <ChatList />
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  flex: 1;
  height: 100%;
  border-right: 1px solid #0a08325f;
  padding: 1rem 0.5rem;
`;
