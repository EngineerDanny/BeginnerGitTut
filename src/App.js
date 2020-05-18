import React, { Component } from 'react'

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
        <div onClick = 'divIsClicked'>{this.state.todo}</div>
        <button onClick='divIsClicked'>Press Me Yahoo!</button>
        <form action="onSubmit">Hey Now Brown Cow</form>
         <section>We will watch football</section>
      </div>

    )
  }
}

export default App


