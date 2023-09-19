import React from "react";
import "./App.css";
import Pokemon from "./Pokemon"

export default class Pokemon extends React.Component {
    constructor(){
        super();

        this.state = {
            pokmonData: {}
        }
    }

	render(){
		if (this.state.pokemonData.name){
			return(
				<div>
					<h1>Pokemon data found!</h1>
				</div>
			)
		} else {
			return(
				<div>
					<h1>Still loading Pokemon data...</h1>
				</div>
			)
		}
	}
}