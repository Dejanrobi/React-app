//getting the proptypes directly rafcp
import React from 'react'
import PropTypes from 'prop-types'

const testing = props => {
  return (
    <div>
      
    </div>
  )
}

testing.propTypes = {
  //shortcut for prop types (ptsr)
  name:PropTypes.string.isRequired,
  //ptnr
  price:PropTypes.number.isRequired,
  //ptar
  array:PropTypes.array.isRequired,

}

export default testing
