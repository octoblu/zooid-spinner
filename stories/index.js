import React from "react"
import { storiesOf } from "@storybook/react"

import Spinner from "../src"

storiesOf("Spinner", module).add("Basic", () => <Spinner />).add("Sizes", () =>
  <div>
    <Spinner size="extra-small" />
    <Spinner size="small" />
    <Spinner size="regular" />
    <Spinner size="large" />
  </div>
)
