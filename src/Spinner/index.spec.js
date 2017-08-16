import chai, { expect } from "chai"
import chaiEnzyme from "chai-enzyme"
import React from "react"
import sinonChai from "sinon-chai"
import { shallow } from "enzyme"

import Spinner from "./"

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe("<Spinner />", () => {
  describe("when given a valid size prop", () => {
    it("should render", () => {
      const sut = shallow(<Spinner size="small" />)
      expect(sut).to.not.be.empty
    })
  })

  describe("when size prop does not exist", () => {
    it("should not render a regular spinner", () => {
      const sut = shallow(<Spinner size="gibberish" />)
      expect(sut).to.be.empty
    })
  })
})
