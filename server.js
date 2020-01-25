const express = require("express"); //helps display posted data on the body
const bodyParser = require("body-parser"); //connecting the app to the database by requiring mongoose
const mongoose = require("mongoose");
const path = require("path"); //helps node understand my app directory
const mongodb = require("mongodb");
const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const Register = require('./models/regModel')


const app = express(); //an app of type express

//middleware
app.set("view engine", "pug"); //setting a template engine
app.set("views", path.join(__dirname, "views"));
//setting the static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());


//express-session for tracking user's activity    or tracking logins
app.use(session({
     secret: "thesecret",
     resave: true,
     saveUninitialized: false

}));


// passport.use(new LocalStrategy(Register.authenticate()));
// passport.serializeUser(function (user, done) {
//      done(null, user.id);
// });

passport.deserializeUser(function (id, done) {
     Register.findById(id, function (err, user) {
          done(err, user);
     });
});

/* mongoose db connection */
mongoose.connect("mongodb://localhost:27017/JuniorBC", { useNewUrlParser: true, useUnifiedTopology: true });






//setting the static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(passport.session());



app.get("/index", (req, res) => {
     res.render("index");
});

app.get("/aboutus",(req,res)=>{
     res.render("aboutus");
});

app.get("/packages", (req, res) => {
  res.render("packages");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("/pricing", (req, res) => {
  res.render("pricing");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});



app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});


app.get("/addAppointments", (req, res) => {
     res.render("addAppointments");
});

app.get("/registerUsers", (req, res) => {
     res.render("registerUsers");
});

app.get("/addBabysitters", (req, res) => {
     res.render("addBabysitters");
});

app.get("/allSupervisors", (req, res) => {
     res.render("allSupervisors");
});

app.get("/login", (req, res) => {
     res.render("loginForm");
});

// app.use(app.router);
// routes.initialize(app);

//import routes
// const registrationRoute = require("./routes/registrationRoute");
// app.use("/register", registrationRoute);

// const loginRoute = require("./routes/loginRoute")
// app.use("/login", loginRoute);

// const dashboardRoute = require("./routes/dashboardRoute");
// app.use("/dashboard", dashboardRoute);

// const appointmentRoute = require("./routes/appointmentRoute")
// app.use("dashboard/appointment", appointmentRoute)







//logout
// app.post('/logout', (req, res) => {
//      if (req.session) {
//           req.session.destroy(function (err) {
//                if (err) {
//                     // failed to destroy session
//                } else {
//                     return res.redirect('/login');
//                }
//           })
//      }

// })
//const sitterloginRoute = require("./routes/sitterloginRoute");
//const sitterdashboardRoute = require("./routes/sitterdashboardRoute");



app.listen(1998, function () {
     console.log("listening on 1998");
});
