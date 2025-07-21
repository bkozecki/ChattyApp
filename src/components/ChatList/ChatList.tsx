import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";

import { Flex } from "../UI/Flex/Flex";
import { Margin } from "../UI/Margin/Margin";

export const ChatList = () => {
  return (
    <Flex $direction="column">
      <StledFlex>
        <SearchBarComponent>
          <input type="text" placeholder="Search..." />
          <CiSearch />
        </SearchBarComponent>
        <FaPlus />
      </StledFlex>
      <ChatListWrapper>
        <img src="./avatar.png" alt="User Avatar" />
        <Margin $right="1rem" />
        <Flex $direction="column" $align="flex-start">
          <span>Jan Krasinski</span>
          <p>Hello mate!</p>
        </Flex>
      </ChatListWrapper>
      <ChatListWrapper>
        <img src="./avatar.png" alt="User Avatar" />
        <Margin $right="1rem" />
        <Flex $direction="column" $align="flex-start">
          <span>Jan Krasinski</span>
          <p>Hello mate!</p>
        </Flex>
      </ChatListWrapper>{" "}
      <ChatListWrapper>
        <img src="./avatar.png" alt="User Avatar" />
        <Margin $right="1rem" />
        <Flex $direction="column" $align="flex-start">
          <span>Jan Krasinski</span>
          <p>Hello mate!</p>
        </Flex>
      </ChatListWrapper>
    </Flex>
  );
};

const StledFlex = styled(Flex)`
  align-items: center;
  padding: 1rem;
  gap: 1.6rem;

  svg {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const SearchBarComponent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 5px;
  background-color: rgba(17, 25, 40, 0.75);
  padding: 1rem;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    flex: 1;
  }
`;

const ChatListWrapper = styled(Flex)`
  align-items: center;
  flex-direction: row;
  overflow: scroll;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #dddddd35;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  span {
    margin-bottom: 0.8rem;
    font-weight: 500;
  }

  p {
    font-size: 0.875rem;
  }
`;
