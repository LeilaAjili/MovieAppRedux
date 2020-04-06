import {
    ADD_MOVIE,
    DELETE_MOVIE, 
    EDIT_MOVIE}
    
from "../constants/actionTypes"


export const addMovie = payload => ({
    type : ADD_MOVIE,
    payload:{...payload, id: Math.random()}
});

export const deleteMovie = id => ({
    type : DELETE_MOVIE,
    id
})

export const editMovie = (id, newMovie)=> ({
    type : EDIT_MOVIE,
    payloadIndex : id,
    payload : newMovie

});
