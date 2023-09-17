const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const resumeRoutes = require('./routes/resumeRoutes.js');
const PORT = 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
///////////////////////////// google strategy//////////////////////

//priyanshu

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// Session configuration
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '113299339217-sa5f95f2omtgfjga59cpaatb0acumufv.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Here you can handle the authenticated user's profile data and decide how to proceed
      // For example, you can store the user's information in a database
      // or perform any additional actions you need.

      // In this example, we simply pass the user's profile to the done callback.
      done(null, profile);
    }
  )
);

// Serialize and deserialize user sessions
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((req, user, done) => {
  // Check if the session has exceeded the maximum session time (5 minutes)
  const maxSessionTime = 5 * 60 * 1000; // 5 minutes in milliseconds
  const currentTime = new Date().getTime();

  if (
    req.session.createdAt &&
    currentTime - req.session.createdAt > maxSessionTime
  ) {
    // Clear the user session
    req.logout();
    req.session.destroy();
    return done(null, null); // Return null to indicate that the session is cleared
  }

  done(null, user);
});

// Define routes
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  (req, res) => {
    const userdata = req.user;
    // Redirect to the /login page after successful authentication
    const query = new URLSearchParams(userdata).toString();
    // res.redirect('/');
    res.redirect(`http://localhost:3000/home?${query}`);
  }
);

app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
    }
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      }
      res.redirect('http://localhost:3000/'); // Redirect to the login page
    });
  });
});

///////////////////////////////////////////////

//punnoose

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const connection = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB ');
  })
  .catch((err) => {
    console.log(err.message);
  });

module.exports = connection;

app.use('/api/', resumeRoutes);
