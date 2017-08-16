import styled from "emotion/react"

import { spinnerBase } from "./helpers"

const SpinnerCircle = styled("span")`
  composes: ${spinnerBase};
  opacity: .4;

  &:before {
    content: "\\E689";
  }
`
export default SpinnerCircle
