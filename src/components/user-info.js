'user strict'

import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.photo} />
    <h1 className='username'>
      <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
    </h1>

    <ul className='repos-info'>
      <li>- Repositories: {userinfo.repos}</li>
      <li>- Followers: {userinfo.followers}</li>
      <li>- Following: {userinfo.following}</li>
    </ul>
  </div>

)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired
  })
}

export default UserInfo
