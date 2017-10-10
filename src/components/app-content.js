'user strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import PropTypes from 'prop-types'

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred, isFetching }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} isDisable={isFetching} />
    {isFetching && <div>Loading...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && <Repos
      className='repos'
      repos={repos}
      title='Repositories:'
      />
    }

    {!!starred.length && <Repos
      className='starred'
      repos={starred}
      title='Favorites:'
      />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
