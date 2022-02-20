import React from 'react';
import ReviewList from './review-list';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: props.movies
        }
    }
    render() {
        let moviesArray;
        if (this.state.movies) {
            moviesArray = this.state.movies.map( (movie, index) => 
                <div className="row my-3">
                <div key={index} className="card mx-auto" style={{ width: "80%" }}>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.plot}</p>
                        
                    </div>
                    <ReviewList reviews={movie.reviews} />
                </div>
                </div>
            )
        }
        return(
            <div>
                {moviesArray}
            </div>
        ) 
    }
}