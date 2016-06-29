import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import Spinner from './'
import styles from './styles.css'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Spinner />', () => {
  describe('when given a size prop', () => {
    describe('when size is small', () => {
      it('should render a small spinner', () => {
        const sut = shallow(<Spinner size="small" />)
        expect(sut).to.have.className(styles.small)
      })
    })
    describe('when size is regular', () => {
      it('should render a regular spinner', () => {
        const sut = shallow(<Spinner size="regular" />)
        expect(sut).to.have.className(styles.regular)
      })
    })
    describe('when size is large', () => {
      it('should render a large spinner', () => {
        const sut = shallow(<Spinner size="large" />)
        expect(sut).to.have.className(styles.large)
      })
    })
  })

  describe('when size prop does not exist', () => {
    it('should render a regular spinner', () => {
      const sut = shallow(<Spinner />)
      expect(sut).to.have.className(styles.regular)
    })
  })

  describe('when given a className as prop', () => {
    it('should merge classNames', () => {
      const sut = shallow(<Spinner className="Jigga" />)
      expect(sut).to.have.className('Jigga')
    })
  })
})
