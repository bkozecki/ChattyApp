import styled from "styled-components";

type Props = {
  fontSize?: string;
  $small?: boolean;
  $bold?: boolean;
  color?: string;
  cursor?: "pointer" | "not-allowed" | "default";
  whiteSpace?: "break-spaces" | "pre-wrap" | "nowrap" | "normal";
  ellipsis?: boolean;
  width?: string;
  alignText?: string;
  wordBreak?: string;
};
export const Text = styled.p<Props>`
  font-size: ${({ $small, fontSize }) =>
    $small ? "0.75rem" : fontSize ? fontSize : "0.875rem"};
  padding: 0;
  font-weight: ${({ $bold }) => ($bold ? "700" : "400")};
  ${({ color }) => (color ? `color: ${color}` : "")};
  ${({ width }) => (width ? `width: ${width}` : "")};
  margin: 0;
  ${({ alignText }) => (alignText ? `text-align: ${alignText}` : "")};
  ${({ cursor }) => (cursor ? `cursor: ${cursor}` : "")};
  ${({ wordBreak }) => (wordBreak ? `word-break: ${wordBreak}` : "")};
  ${({ ellipsis }) =>
    ellipsis
      ? `
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;     `
      : ""};
`;
