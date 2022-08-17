import Figaro from "./assets/figaro.png";
import Figaro2 from "./assets/figaro2.png";
import Figaro3 from "./assets/figaro3.png";
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
            "This project is a fully server-side rendered web app, taking advantage of the performance benefits of this approach. I created a node server with express, which interacts with the Spotify API, using the client credentials flow, for all of the relevant song data to be provided to the client. The song of the day is received from the API and subsequently stored in a MongoDB database until the client is visited the next day onwards. The current song will then be deleted from the database for the new song of the day to be saved.",
            "A significant aspect of developing the backend was understanding how to interact with the API. Multiple requests needed to be chained together and every request returned data that needed to be used in the next respective call to eventually end up with a song to be sent to the client. The project also exposed me to interacting with the HTMLAudioElement in order to create a straightforward music player for the songs returned from Spotify.",
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
        liveProject: "https://figarostore.herokuapp.com/",
        github: "https://github.com/Shakadeliks/figaro-store",
        description: "I built this full stack e-commerce store to further familiarise myself with the process of integrating a front-end app with a backend server and database. The site is responsive, allowing users to create an account and/or sign in - the inclusion of redux provides the feature of peristing user sessions.",
        moreDescription: [
            " Building the shopping cart functionality of this project was a significant learning curve and deepened my understanding of state management. I implemented the shopping cart functionality using redux/toolkit, with the ability for the state of the users shopping cart to be persisted across sessions.",
            "The products and their details are stored on a MongoB database and can be fetched randomly or by their corresponding categories depending on where the user browses on the site.",
            "This project was a learning experience in approaching bigger challenges, being that this included front-end and back-end implementations. I learnt that there are considerations to be made for how the front-end and back-end will work and interact with each other and that either side cannot be designed and made completely independently."
        ],
        images: [
            Figaro,
            Figaro2,
            Figaro3,
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
        moreDescription: [
            'Furthermore, there was a lesson in adding the returned data to state. This data had to be processed in order to be then passed to the relevant components to be dynamically rendered.',
            "The search function allowed me to understand the process of grabbing user inputs, passing that data to their own state and then sending information to an API and waiting for the relevant information to return and how to validate this process."
        ],
        images: [
            Weather
        ]
    },
]    
