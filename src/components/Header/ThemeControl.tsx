import { IoMoonSharp } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";

import styled from "styled-components";
import { Margin } from "../UI/Margin/Margin";

type ThemeControlProps = {
  isDarkmode: boolean;
  setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeControl = ({
  isDarkmode,
  setIsDarkmode,
}: ThemeControlProps) => {
  return (
    <ThemeControlWrapper>
      <StyledSunIcon
        onClick={() => setIsDarkmode(false)}
        active={!isDarkmode}
      />
      <Margin $right="0.8rem" />
      <StyledMoonIcon onClick={() => setIsDarkmode(true)} active={isDarkmode} />
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

const StyledSunIcon = styled(FaSun)<{ active: boolean }>`
  cursor: pointer;
  color: ${({ active }) => (active ? "#ffe72e" : "#00000076")};
  font-size: 1.2rem;
`;
const StyledMoonIcon = styled(IoMoonSharp)<{ active: boolean }>`
  cursor: pointer;
  color: ${({ active }) => (active ? "#6f74bd" : "#d1d1d1")};
  font-size: 1.2rem;
`;
