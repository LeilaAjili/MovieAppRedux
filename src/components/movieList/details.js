
import React from 'react'
import {connect} from 'react-redux'
import './movieApp.css'
import { Link } from "react-router-dom";




 function details(props) {

    


    return (
        <div>
           {props.movies.map((el,i ) =>i === Number(props.match.params.id)&&
           <div className="description1">
               <h1>Synopsis du film {el.title}</h1>
               <p>{el.details}</p>
               <Link to={`/`}> 
               <button type="button" class="btn btn-outline-secondary waves-effect"  >Back</button>
               </Link>
                
                </div>
           )} 
        </div>
    )
}

const mapStateToProps = state => {
    return{
        movies:state.movies
    }
}

export default  connect(mapStateToProps)(details)  
 