import React from 'react';

const Travel = ({ destination, country, photo, distance }) => (
    <figure>
        <img src={photo} alt="Bacrcelona" />
        <figcaption>
            <blockquote>{destination}</blockquote>
            <cite>{country}</cite>
            <cite>{distance}</cite>
        </figcaption>
    </figure>
);

export default Travel;



//Create and display a Travels component
// In the my-travels app created in the previous quest, add a Travels component that
// will contain an array of 5 trips and display the list by reusing the Travel component,
// also from the previous quest.
//
// Once completed, commit and push your application and post the repository
// link to your solution.
//
// Validation criteria
// The application must display multiple trips
// Travel data must be stored in an array
// The display must result from a map method called on the array