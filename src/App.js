import React, { Component } from 'react'
//import { Button } from '@material-ui/core'
import SignInPage from './SignInPage'

class App extends Component {
  state = {
    todo: [
      'I will learn core react',
      'I wil play guitar today',
      'I will watch movies',
      'We will go to church'
    ]
  }

  divIsClicked() {
    console.log('you have clicked me hoss');

  }


  render() {
    return (
      <div className="App">
        <SignInPage />
      </div>

    )
  }
}

export default App


