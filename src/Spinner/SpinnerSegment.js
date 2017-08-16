import { keyframes } from "emotion"
import styled from "emotion/react"

import { spinnerBase } from "./helpers"

const segment = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const SpinnerSegment = styled("span")`
  composes: ${spinnerBase};
  animation: ${segment} 0.8s infinite step-end;
  transform-origin: 50% 51%;

  &:before {
    content: "\\E689A";
  }
`

export default SpinnerSegment
