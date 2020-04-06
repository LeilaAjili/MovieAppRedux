import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

function Header  (props){

        return (
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
               
             
            </div>
         
             
                <div style={{textAlign:"center", fontSize:"30px"}} >
                <h1 > <b>MOVIE APP</b></h1>      
               
                </div>





                <div > 

                
                <div className="serach-bar"> 
                <h1 > <small>Search..</small></h1>  
                <input type="text" class="search-hover" name="" placeholder="search here..." onChange={e => props.handleSearch(e.target.value)}/>
                </div></div>





            <div>
                <div class="rating div-rate">
     
                <input type="radio" id="star5" name="rating" value="5" onClick={()=>props.handleChange(5)}/><label for="star5" title="Meh" >5 stars</label>
                <input type="radio" id="star4" name="rating" value="4" onClick={()=>props.handleChange(4)}/><label for="star4" title="Kinda bad" >4 stars</label>
                <input type="radio" id="star3" name="rating" value="3" onClick={()=>props.handleChange(3)}/><label for="star3" title="Kinda bad" >3 stars</label>
                <input type="radio" id="star2" name="rating" value="2" onClick={()=>props.handleChange(2)}/><label for="star2" title="Sucks big tim" >2 stars</label>
                <input type="radio" id="star1" name="rating" value="1" onClick={()=>props.handleChange(1)}/><label for="star1" title="Sucks big time" >1 star</label>
    
        </div>

</div>
   </div> 

 
            
        )
    }
    


export default Header
