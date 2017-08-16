import styled from "emotion/react"
import { SIZES } from "./helpers"

const SpinnerContainer = styled("div")`
  position: relative;
  display: inline-block;
  width: 2em;
  height: 1em;
  vertical-align: middle;
  font-size: ${props => SIZES[props.size]};
`

export default SpinnerContainer
