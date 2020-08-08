import React from "react";
import Card from './Card';

//pure component
const CardList = ({ robots }) => {

    // if(true){
    //     return new Error("something goes wrong!");
    // }

    return (
        robots.map(robot =>
            <Card
                key={robot.id}
                id={robot.id}
                name={robot.name}
                email={robot.email}
            />)
    )
}

export default CardList;