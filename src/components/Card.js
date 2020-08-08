import React from 'react';

//pure component
const Card = ({ id, name, email }) => {
    return (
        <div className=" bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
            <img alt="robot_image" src={`https://robohash.org/${id}?size=200x200`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;