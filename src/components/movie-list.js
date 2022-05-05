import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {

        let movies = [
            {
                title: "The Matrix",
                image: "/images/matrix.jpg",
                plot: "Neo and Trinity do some cool things",
                reviews: []
            },
            {
                title: "Star Wars",
                image: "/images/starwars.jpg",
                plot: "Lot's of space and a dog that walks upright",
                reviews: []
            },
            {
                title: "Shaun of the Dead",
                image: "/images/shaun.jpg",
                plot: "A British zombie comedy!  What else can you ask for?",
                reviews: []
            },
            {
                title: "Iron Man",
                image: "/images/ironman.jpg",
                plot: "Robert Downey Jr's comeback",
                reviews: []
            }
        ]
        let arr;
        arr = movies.map( (movie, index ) => 
            <Movie title={movie.title} plot={movie.plot} reviews={movie.reviews} image={movie.image} key={index} />
        )
        

        return(
            <div>
                { arr }
            </div>
        )
    } 
}