import Figaro from "./assets/figaro.png";
import Weather from "./assets/weather.png";
import Asad1 from "./assets/asongaday1.png";
import Asad2 from "./assets/asongaday2.png";
import Asad3 from "./assets/asongaday3.png";

export const projects = [
    {
        id: 1,
        name: "a song a day",
        stack: [
            "nodejs",
            "expressjs",
            "spotify api",
            "mongodb",
            "tailwindcss",
        ],
        liveProject: "https://asongaday.herokuapp.com/",
        github: "https://github.com/Shakadeliks/a-song-a-day",
        description: "A website for music lovers and listeners hungry for new sounds. A new song is recommended every day and users can try their luck with random song search based on any genre",
        moreDescription: "Proident eiusmod adipisicing eu nisi. Velit consequat irure elit est ad eiusmod sit labore non et aliqua minim. Proident occaecat consequat duis incididunt officia sit ad. \n Ex quis aute deserunt eu voluptate sint ex. Aute sit ad proident quis. Culpa elit proident et reprehenderit culpa exercitation magna esse esse dolor. \n In velit do dolor occaecat aute eu labore commodo. Consequat ex tempor voluptate cupidatat. Eiusmod cillum qui culpa laborum aliquip do ea cillum sit excepteur nulla labore labore. Dolore labore excepteur culpa enim dolor. Dolor minim fugiat sunt est irure mollit cillum veniam consequat mollit elit.",
        images: [
            Asad1,
            Asad2,
            Asad3
        ]
    },
    {
        id: 2,
        name: "figaro e-commerce store",
        stack: [
            "react",
            "material ui",
            "react redux",
            "redux/toolkit",
            "styled-components",
            "axios",
            "stripe checkout",
            "node.js",
            "express.js",
            "mongodb",
            "json web token",
            "mongoose",
            "stripe",
            "crypto-js"
        ],
        liveProject: "https://62823fecfe4e330008820fe9--splendid-tapioca-9dae95.netlify.app/",
        github: "https://github.com/Shakadeliks/figaro-fullstack-e-commerce-store",
        description: "I built this full stack e-commerce store to further familiarise myself with the proces of integrating a front-end app with a backend server and database. The site is responsive, allowing users to create an account and/or sign in - the inclusion of redux provides the feature of peristing user sessions. Building the shopping cart functionality of this project was a significant learning curve and deepened my understanding of state management.",
        images: [
            Figaro
        ]
    },
    {
        id: 3,
        name: "weather app",
        stack: [
            "react",
            "bootstrap",
            "REST API"
        ],
        liveProject: "https://shakadeliks.github.io/weather-app/",
        github: "https://github.com/Shakadeliks/weather-app",
        description: "This weather app provided a strong lesson in working with data and dynamically rendering specific elements based on the changing values of the relevant data. This was also my introduction to sending data via requests and async functions that await a response from an API. Users enter the city name and country to receive the current weather of the location.",
        images: [
            Weather
        ]
    },
]    
