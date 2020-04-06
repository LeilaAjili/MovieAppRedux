import React, { Component } from 'react';
import {connect} from "react-redux";
import {deleteMovie} from '../../Js/actions/actions';
import './movieCard.scss';
import Edit from './edit'
import { Link } from "react-router-dom";
import {bootbox, alert} from 'react-bootbox'


 




const MovieCard = ({elm, deleteMovie, }  )=> {


    let starArray = [];
    let z=elm.rate
    for (let i = 1; i <= z; i++) {
      
        starArray.push(
            <span>★</span>
          
        );
        }
    

        

  
        return (
            
        
            <div className="wrapper">
            <div className="card">
                <input type="checkbox" id={'card'+elm.id}  className="more" aria-hidden="true" />
                <div className="content">
                    <div className="front" style={{backgroundImage:"url('"+elm.img }}>
                        <div className="inner">
                            <h2>{elm.title}</h2> <br />
                            <h6>{elm.release}</h6>


                            <div className="rating1">
                           
                              {starArray}
                           

                             </div>
                             

                            <label for={'card'+elm.id} className="button" aria-hidden="true">
                                Details
                            </label>
                            
                             


                            
                                   



                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <div className="info">
                                 
                                <div className="icon">
                                    <i className="fas fa-users"></i>
                                     
                                </div>
                            </div>
                            <div className="info">
                                 
                                <div className="icon">
                                    <i className="fas fa-door-open"></i>
                                    
                                </div>
                            </div>
                  
                            <div className="description">
                                 
                                <p>{elm.desc}</p>
                                <Link to={`/details/${elm.id}`}> Show more.. </Link>
                                
                            </div>

                            
                            <div className="location">
                            <button className="buttton" >
                            <Edit elm = {elm} />
                            </button>
                            
                            </div>

 

 


                            <div className="price" aria-hidden="true" label for = {'card'+elm.id} > 
                            <button className="buttton" onClick={() => {
                                
                                
                                
                                
                                
                                deleteMovie(elm.id)}
                            } >
                            <img src="delete2.png" className="img"  />
                            </button></div>





                             
                            <label for={'card'+elm.id}  className="button return" aria-hidden="true">
                                <i className="fas fa-arrow-left"> back</i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
           

                         
        </div>
        );
        }

        const mapDispatchToProps =dispatch=>{
            return {
                deleteMovie:(id)=>{
                    dispatch(deleteMovie(id))
                }
                
            }
        }

        export default connect(null, mapDispatchToProps) (MovieCard)
