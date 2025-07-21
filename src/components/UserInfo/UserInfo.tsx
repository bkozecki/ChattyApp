import { IoIosMore } from "react-icons/io";
import { IoIosVideocam } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";

import { Flex } from "../UI/Flex/Flex";

export const UserInfo = () => {
  return (
    <UserInfoWrapper>
      <UserData>
        <img src="./avatar.png" alt="Users avatar"></img>
        <h3>Mr. Kozecki</h3>
      </UserData>
      <Flex
        $width="30%"
        $direction="row"
        $align="center"
        $justify="space-between"
      >
        <IoIosMore />
        <IoIosVideocam />
        <MdEdit />
      </Flex>
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  padding: 0 1rem;

  svg {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const UserData = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
