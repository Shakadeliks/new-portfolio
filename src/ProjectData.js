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
        moreDescription: [
            "This project is a fully server-side rendered web app, taking advantage of the performance benefits of this approach. I created a node server with express, which interacts with the Spotify API, using the client credentials flow, for all of the relevant song data to be provided to the client. The song of the day is received from the API and subsequently stored in the MongoDB until the client is visited the next day onwards. The current song will then be deleted from the database for the new song of the day to be saved.",
            "A singificant aspect of developing the backend was understanding how to interact with the API. Multiple requests needed to be chained together and every request returned data that needed to be used in the next respective call to eventually end up with a song to be sent to the client. The project also exposed me to interacting with the HTMLAudioElement in order to create a straightforward music player for the songs returned from Spotify.",
            "Going forward I would like to add and include a feature for music videos of the returned songs to be displayed and links for the user to be directed to either Spotify or Apple Music to listen to a recommended song in its entirety.",
        ],   
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
