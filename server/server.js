const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { authMiddleware } = require("./utils/auth");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const db = require("./config/connection");
const routes = require('./api');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);
app.use(express.json());
app.use(routes);
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        store: MongoStore.create(db),
        cookie: {
            // maxAge sets the maximum age for the session to be active. Listed in milliseconds.
            maxAge: 3600000,
            // httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
            httpOnly: true,
            // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
            secure: false,
            // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
            sameSite: 'strict',

            test: 'hello'
        }
    })
);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});