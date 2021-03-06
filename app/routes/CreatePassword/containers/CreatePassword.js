import React, { Component } from 'react'

import Layout from '../components/Layout'

class CreatePassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: '',
      error: {
        length: false,
        number: false,
        letter: false,
        row: false,
      },
      continue: false,
    }

    this.properties = props.location.state
  }

  updatePassword = (e) => {
    this.setState({ password: e.target.value })
    this.validatePassword(e.target.value)
  }


  validateLength = (password) => {
    if (!password || password.length < 8) {
      this.setState((prevState, props) => ({
        error: {
          ...prevState.error,
          length: false
        }
      }))
      return false
    }

    this.setState((prevState, props) => ({
      error: {
        ...prevState.error,
        length: true
      }
    }))
    return true
  }

  validateNumber = (password) => {
    const expression = /.*\d+.*/
    if (!password || !expression.test(password)) {
      this.setState((prevState, props) => ({
        error: {
          ...prevState.error,
          number: false
        }
      }))
      return false
    }

    this.setState((prevState, props) => ({
      error: {
        ...prevState.error,
        number: true
      }
    }))
    return true
  }

  validateLetter = (password) => {
    const expression = /.*[a-zA-Z]+.*/
    if (!password || !expression.test(password)) {
      this.setState((prevState, props) => ({
        error: {
          ...prevState.error,
          letter: false
        }
      }))
      return false
    }

    this.setState((prevState, props) => ({
      error: {
        ...prevState.error,
        letter: true
      }
    }))
    return true
  }

  validateRow = (password) => {
    const expression = /.*(.)\1{2}.*/
    if (!password || expression.test(password)) {
      this.setState((prevState, props) => ({
        error: {
          ...prevState.error,
          row: false
        }
      }))
      return false
    }

    this.setState((prevState, props) => ({
      error: {
        ...prevState.error,
        row: true
      }
    }))
    return true
  }

  validatePassword = (password) => {
    const length = this.validateLength(password)
    const number = this.validateNumber(password)
    const letter = this.validateLetter(password)
    const row = this.validateRow(password)

    if (length && number && letter && row) {
      this.setState({ continue: true })
    }
    else {
      this.setState({ continue: false })
    }
  }

  render() {
    const {
      password,
      confirmPassword,
      error,
    } = this.state

    return (
      <Layout
        password={password}
        error={error}
        updatePassword={this.updatePassword}
        properties={this.properties}
        continue={this.state.continue}
      />
    )
  }
}

export default CreatePassword
