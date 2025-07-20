import styled from "styled-components";

export type MarginProps = {
  $top?: string;
  $bottom?: string;
  $right?: string;
  $left?: string;
  $combined?: string;
};

export const Margin = styled.div<MarginProps>`
  ${({ $combined }) => $combined && `margin: ${$combined}`}
  ${({ $top }) => $top && `margin-top: ${$top}`}
  ${({ $bottom }) => $bottom && `margin-bottom: ${$bottom}`}
  ${({ $right }) => $right && `margin-right: ${$right}`}
  ${({ $left }) => $left && `margin-left: ${$left}`}
`;
