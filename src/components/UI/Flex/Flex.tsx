import styled from "styled-components";
import type { MarginProps } from "../Margin/Margin";

type FlexProps = MarginProps & {
  $justify?:
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "center"
    | "space-around";
  $align?: "flex-start" | "flex-end" | "center" | "baseline";
  $direction?: "row" | "column";
  $gap?: string;
  $height?: string;
  $width?: string;
  $wrap?: "wrap" | "nowrap";
  $overflow?: "hidden" | "auto";
  $position?: "absolute" | "relative";
  $maxWidth?: string;
};
export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ $width }) => `width: ${$width || "100%"};`}
  ${({ $maxWidth }) => $maxWidth && `max-width: ${$maxWidth};`}
  ${({ $height }) => $height && `height: ${$height};`}
  ${({ $justify }) => $justify && `justify-content: ${$justify};`}
  ${({ $align }) => $align && `align-items: ${$align};`}
  ${({ $direction }) => $direction && `flex-direction: ${$direction};`}
  ${({ $gap }) => $gap && `gap: ${$gap};`}
  ${({ $combined }) => $combined && `margin: ${$combined};`}
  ${({ $top }) => $top && `margin-top: ${$top};`}
  ${({ $right }) => $right && `margin-right: ${$right};`}
  ${({ $bottom }) => $bottom && `margin-bottom: ${$bottom};`}
  ${({ $left }) => $left && `margin-left: ${$left};`}
  ${({ $wrap }) => $wrap && `flex-wrap: ${$wrap};`}
  ${({ $overflow }) => $overflow && `overflow: ${$overflow};`}
  ${({ $position }) => $position && `position: ${$position};`}
`;
