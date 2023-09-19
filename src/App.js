import React from 'react';
import './App.css';
import Pokemon from './Pokemon';

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

  exampleFunction(){
    console.log("Hello world, from button click");
  }

  decreasePokemonCount(currentCount){
    if (this.state.pokemonCount > 0){
      this.setState({pokemonCount: this.state.pokemonCount - 1}); 
    }
  }

  render(){
    return(
      <div>
        <h1>Pokemon page</h1>

        {/* <button onClick={this.exampleFunction}>Increase Pokemon count</button>
        <button onClick={() => {console.log("Hello world from inline expression")}}>Decrease Pokemon count</button> */}

        <button onClick={() => {this.setState({pokemonCount: this.s})}}>Increase Pokemon count</button>
        <button onClick={this.decreasePokemonCount(this.state.pokemonCount)}>
          Decrease Pokemon count
        </button>

        <Pokemon></Pokemon>

      </div>
    )
  }
}

export default App;
