import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['regular', 'extra-small', 'small', 'large']),
}

const defaultProps = {
  size: 'regular',
}

const Spinner = ({ className, size }) => {
  const classes = classNames(styles[size], className)

  return (
    <div className={classes}>
      <i className={styles.circle} />
      <i className={styles.segment} />
    </div>
  )
}

Spinner.propTypes    = propTypes
Spinner.defaultProps = defaultProps

export default Spinner
