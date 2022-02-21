import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {

        let movies = [
            {
                title: "The Matrix",
                plot: "Neo and Trinity do some cool things",
                reviews: []
            },
            {
                title: "Star Wars",
                plot: "Lot's of space and a dog that walks upright",
                reviews: []
            },
            {
                title: "Shaun of the Dead",
                plot: "A British zombie comedy!  What else can you ask for?",
                reviews: []
            }
        ]
        let arr;
        arr = movies.map( (movie, index ) => 
            <Movie title={movie.title} plot={movie.plot} reviews={movie.reviews} key={index} />
        )
        

        return(
            <div>
                { arr }
            </div>
        )
    } 
}