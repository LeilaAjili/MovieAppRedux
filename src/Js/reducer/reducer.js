import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE} from "../constants/actionTypes"




import {movies} from "../../components/data"


const data = {movies}

const reducer = (state = data, {type, payload, id, payloadIndex}) => {
    switch (type){


        case ADD_MOVIE:
            return{
                ...state,
                movies:[...state.movies, payload]
            };

        case DELETE_MOVIE:
            return{
                ...state, movies:state.movies.filter(el => el.id !==id)
                 

            }

        case EDIT_MOVIE:
            return{
                ...state, movies: state.movies.map(el => el.id === payloadIndex? payload : el)

                
               
            }

           
        default:
            return state
    }
}

export default reducer;