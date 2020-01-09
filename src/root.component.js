import React from 'react'

export default class Root extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch (error, info) {
    this.setState({hasError: true})
  }

  render () {
    return (
      <div>my-context</div>
    )
  }
}
