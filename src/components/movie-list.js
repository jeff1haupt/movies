import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {

        let movies = [
            {
                title: "The Matrix",
                plot: "Neo and Trinity do some cool things",
                reviews: [
                    "The movie was pretty good - some old guy",
                    "KEANU!!!!! - Bill"
                ]
            },
            {
                title: "Star Wars",
                plot: "Lot's of space and a dog that walks upright"
            }
        ]

        return(
            <Movie {...{movies: movies}}/>
        )
    }
}