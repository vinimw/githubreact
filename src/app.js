'use strict'

import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='search'>
          <input
            type='search'
            placeholder='Place user name'
          />
        </div>
        <div className='user-info'>
          <img src='https://avatars2.githubusercontent.com/u/4948367?v=4' />
          <h1>
            <a href='https://api.github.com/users/vinimw'>Vinicius Weber</a>
          </h1>

          <ul className='repos-info'>
            <li>- Repositories: 100</li>
            <li>- Followers: 100</li>
            <li>- Following: 100</li>
          </ul>

          <div className='actions'>
            <button>Show repositories</button>
            <button>Show favorites</button>
          </div>

          <div className='repos'>
            <h2>Repositories:</h2>
            <ul>
              <li><a href='#'>repository name</a></li>
            </ul>
          </div>

          <div className='starred'>
            <h2>Favorites:</h2>
            <ul>
              <li><a href='#'>repository name</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
