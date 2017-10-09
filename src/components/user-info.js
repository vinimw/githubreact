'user strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars2.githubusercontent.com/u/4948367?v=4' />
    <h1 className='username'>
      <a href='https://api.github.com/users/vinimw'>Vinicius Weber</a>
    </h1>

    <ul className='repos-info'>
      <li>- Repositories: 100</li>
      <li>- Followers: 100</li>
      <li>- Following: 100</li>
    </ul>
  </div>

)

export default UserInfo
