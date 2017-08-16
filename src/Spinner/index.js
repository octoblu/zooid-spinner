import indexOf from "lodash/indexOf"
import keys from "lodash/keys"
import PropTypes from "prop-types"
import React from "react"

import { SIZES } from "./helpers"
import SpinnerCircle from "./SpinnerCircle"
import SpinnerContainer from "./SpinnerContainer"
import SpinnerSegment from "./SpinnerSegment"

const SPINNER_SIZES = keys(SIZES)

const propTypes = {
  size: PropTypes.oneOf(SPINNER_SIZES),
}

const defaultProps = {
  size: "regular",
}

const Spinner = ({ size }) => {
  if (indexOf(SPINNER_SIZES, size) < 0) return null

  return (
    <SpinnerContainer size={size}>
      <SpinnerCircle />
      <SpinnerSegment />
    </SpinnerContainer>
  )
}

Spinner.propTypes = propTypes
Spinner.defaultProps = defaultProps

export default Spinner
