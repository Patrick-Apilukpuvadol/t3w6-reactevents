import React from 'react';
import './App.css';

// Page that lets us increase or decrease
// How many pokemon are on screen
// App component needs to:
//  - Keep track of how many pokemon to show
// - Iterate over a single, D.R.Y modular Pokemon component
// - button to increase Pokemon count
// - button to decrease Pokemon count

class App extends React.Component {
  constructor(){
    super();

    // start with at least one pokemon on screen
    this.state = {
      pokemonCount :1
    }
  }

  render(){
    return(
      <div>
        <h1>Pokemon page</h1>
      </div>
    )
  }
}

export default App;
