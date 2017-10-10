'user strict'

import React from 'react'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>Show repositories</button>
    <button onClick={getStarred}>Show favorites</button>
  </div>
)

export default Actions
