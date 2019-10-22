import React from "react";
// src/Quotes.js
const travels = [
    {
        description:
            "Barbados is one of the most beautiful places in the world. A place to relax, have fun and forget about all your troubles",
        destination: "Barbados",
        image:
            "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/01/08/14/barbados-shutterstock.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5"
    },
    {
        description: "Nothing you say can upset us. Madrid is another home for me",
        destination: "Madrid",
        image:
            "https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/editorial/GranViaMadrid_1398771941838_1401274516.173.jpg?itok=GyB-gZH-"
    },
    {
        description: "That's where I saw one of the most beautiful european cities",
        destination: "Amsterdam",
        image:
            "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/river-houses-in-amsterdam-netherlands.jpg?itok=StL_iS_m"
    },
    {
        description:
            "Miami, one of the most beautiful american cities. Located in Florida",
        destination: "Miami",
        image:
            "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/miami-florida/miami-florida-south-beach-aerial.jpg?$750x320$"
    }
];

const Quotes = () => (
    <div>
        {travels.map(description => (
            <div>
                <img src={description.image} />
                <h1>{description.destination}</h1>
                <p>"{description.description}"</p>
            </div>
        ))}
    </div>
);

export default Quotes;