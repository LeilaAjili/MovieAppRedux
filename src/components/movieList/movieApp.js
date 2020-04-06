import React, {Component} from 'react';
import Header from '../header/header';
import MovieList from '../movieList/movieList';
import Add from '../movieList/add';
//import {movies} from './components/data';
import { connect } from 'react-redux';
import './movieApp.css'

class MovieApp extends Component {
    state={
        search:"",
        minRate:"",
       }
    
        
           
    
           handleSearch = valeur => this.setState({ search: valeur });
    
           handleChange = rate => this.setState({ minRate: rate });
    
           
    
           render(){
    
            const filteredMovies = this.props.movies.filter(
              movie =>movie.title.toLowerCase()
                  .includes(this.state.search)  &&
                  movie.rate >= this.state.minRate
            )
    
            
           
      return (
        <div className="App">
          
          
          <div className="header">
          < Header  handleSearch={this.handleSearch} handleChange={this.handleChange}  minRate={this.state.minRate}/>
          </div >
    
    
    
          <div className="main">
          <MovieList  movies={filteredMovies} /> 
    
          <Add handleAdd={this.handleAdd}/> 
              
              
             
             
              
         
          </div> 
           
        </div>
      );
    }
}
const mapStateToProps = state => ({
    movies: state.movies
  
  });
  
  
  export default connect(mapStateToProps) (MovieApp);
  