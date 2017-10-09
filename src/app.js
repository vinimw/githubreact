'use strict'

import React, { Component } from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />

        <Repos
          className='repos'
          repos={[{
            name: 'repository name',
            link: '#'
          }]}
          title='Repositories:'
        />

        <Repos
          className='starred'
          repos={[{
            name: 'repository name',
            link: '#'
          }]}
          title='Favorites:'
        />
      </div>
    )
  }
}

export default App
