import React, { Component } from 'react';

 class MainContainer extends Component {
	constructor(){
		super();
		this.state = {
 		}
	}
	render(){
		return (
			<div>
        <h1>Pokemon</h1>
        <h2>Name: {this.props.pokemon.name}</h2>
        <h4>Height: {this.props.pokemon.height}</h4>
        <h4>Weight: {this.props.pokemon.weight}</h4>
      </div>
		)
	}
}
 export default MainContainer;
