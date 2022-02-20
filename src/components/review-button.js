import React from "react";

export default class ReviewButton extends React.Component {
    render() {
        return(
            <div className="text-white bg-dark card-footer mt-5">
                <p>Have something to say about the movie?</p>
                <input type="text" /><br /><br />
                <button className="btn btn-primary">Add your review</button>
            </div>
        )
    }
}