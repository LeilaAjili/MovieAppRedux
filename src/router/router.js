import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MovieApp from '../components/movieList/movieApp'
import Details from '../components/movieList/details'

const MovieRouter =() => (
    <Router>
        <Switch>
            <Route path="/" exact component={MovieApp} />
            <Route path="/details/:id"  component={Details} />

        </Switch>
    </Router>
)

export default MovieRouter;