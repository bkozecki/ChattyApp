import styled from "styled-components";

import { ChatList } from "../ChatList/ChatList";
import { UserInfo } from "../UserInfo/UserInfo";

export const List = () => {
  return (
    <ListWrapper>
      <UserInfo />
      <ChatList />
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  flex: 1;
  height: 100%;
`;
