import React from "react";
import Review from "./review";
import ReviewButton from "./review-button";

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: this.props.reviews
        }
    }
    render() {
        return (
            <div>
                <hr />
                <Review reviews={this.state.reviews} />
                <ReviewButton />
            </div>
        )
    }
}