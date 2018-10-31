import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import MainContainer from './MainContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      username: '',
      pokemon: ''
    }
  }

  getPokemon = async () => {
    try {
      const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/130/');
      const pokeJson = await pokemon.json();
      return pokeJson
    } catch(err) {
      return err
    }
  }

  handleLogin = (username, logged) => {
    this.setState({
      username: username,
      logged: logged
    });
  }

  componentDidMount(){
   this.getPokemon().then((pokemon) => {
     console.log(pokemon, ' this is pokemon');
     this.setState({pokemon: pokemon})
   }).catch((err) => {
     console.log(err);
   })
 }


  render() {
    return (
      <div className="App">
      {this.state.logged ? <MainContainer username={this.state.username} pokemon={this.state.pokemon} /> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
