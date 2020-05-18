import React, { Component } from 'react'
import { Button } from '@material-ui/core'
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
        <h1>Danny is awesome</h1>
        <h2>He is the best programmer I have ever seen</h2>
        <h3>React is my favorite web framework</h3>
        <button type="submit">Click me Hosses</button>
        <div onClick='divIsClicked'>{this.state.todo}</div>
        <Button color="primary">Hello World</Button>
        <SignInPage />
        <form action="onSubmit">Hey Now Brown Cow</form>
        <section>We will watch football</section>
      </div>

    )
  }
}

export default App


