'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const Enter = 13

    if (keyCode === Enter) {
      
      this.setState({ isFetching: true })

      ajax().get(`https://api.github.com/users/${value}`)
      .then((result) => {
        this.setState({
          repos: [],
          starred: [],
          userinfo: {
            username: result.name,
            repos: result.public_repos,
            login: result.login,
            followers: result.followers,
            following: result.following,
            photo: result.avatar_url
          }
        })
      })
      .always(() => {
        this.setState({ isFetching: false })
      })
    }
  }

  getRepos (type) {
    return (e) => {
      ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/${type}`)
      .then((result) => {
        this.setState({
          [type]: result.map((repo) => {
            return {
              name: repo.name,
              link: repo.html_url
            }
          })
        })
      })
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
      isFetching={this.state.isFetching}

    />
  }
}

export default App
