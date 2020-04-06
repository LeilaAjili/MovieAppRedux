import React, { Component } from 'react';
import MovieCard from './movieCard';
import Modals from './add'


import './movieList.css';
 



   const MovieList = ({movies}) => {

    return (
            
        movies.map((elm) => (
            
              <MovieCard
                elm={elm}
                label={elm.id}
               />
       
            )
        )
  
            
    )

   }
        
 
    



export default MovieList