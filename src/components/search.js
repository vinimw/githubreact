'user strict'

import React from 'react'
// import ajax from '@fdaciuk/ajax'
import PropTypes from 'prop-types'

const Search = ({ handleSearch, isDisable }) => (
  <div className='search'>
    <input
      disabled={isDisable}
      type='search'
      placeholder='Place user name'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
