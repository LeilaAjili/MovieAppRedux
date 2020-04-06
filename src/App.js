import React, {Component, BootBox} from 'react';
import Header from './components/header/header';
import MovieList from './components/movieList/movieList';
import Add from './components/movieList/add';
//import {movies} from './components/data';
import { connect } from 'react-redux';
import './App.css';
import MovieRouter from './router/router'
import MovieApp from './components/movieList/movieApp'



class App extends Component {

  
  
    
       
      render(){
       
  return (
    <div className="App">
      
      <MovieRouter />
      
    
    </div>
  );
}
}

const mapStateToProps = state => ({
  movies: state.movies

});


export default connect(mapStateToProps) (App);
