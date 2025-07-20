import { FaSun } from "react-icons/fa6";
import { IoMoonSharp } from "react-icons/io5";
import styled from "styled-components";

import { Margin } from "../UI/Margin/Margin";

type ThemeControlProps = {
  isDarkmode: boolean;
  setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
};

type IconProps = {
  active: boolean;
  activeColor: string;
  inactiveColor: string;
};

export const ThemeControl = ({
  isDarkmode,
  setIsDarkmode,
}: ThemeControlProps) => {
  return (
    <ThemeControlWrapper>
      <StyledIcon
        onClick={() => setIsDarkmode(false)}
        as={FaSun}
        active={!isDarkmode}
        activeColor="#ffe72e"
        inactiveColor="#00000076"
      />
      <Margin $right="0.8rem" />
      <StyledIcon
        onClick={() => setIsDarkmode(true)}
        as={IoMoonSharp}
        active={isDarkmode}
        activeColor="#6f74bd"
        inactiveColor="#d1d1d1"
      />
    </ThemeControlWrapper>
  );
};

const ThemeControlWrapper = styled.div`
  width: 90%;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

const StyledIcon = styled.span<IconProps>`
  cursor: pointer;
  color: ${({ active, activeColor, inactiveColor }) =>
    active ? activeColor : inactiveColor};
  font-size: 1.2rem;
`;
