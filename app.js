/**************
               SETUP CONSTANTS AND MODIFY EXPRESS SETTINSG
**************/

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser")


// we need to use body parser for to parse the 'body' of our http responses
app.use(bodyParser.urlencoded({extended:true}));

/*we need this to tell our express app where to look for items when they are called. 
  We can make more folders like this for our files to access if need be, but public is the most common.
*/
app.use(express.static("public"))

/**************
              DATA FOR BURGER SPOT, WILL BE A DATABASE LATER
***************/

let burgersDatabase = [
    {
        name: "Petey's",
        rating: 30,
        image: "https://cantwellsmarket.com/wp-content/uploads/2018/06/HAMBURGER.jpg"
    },

    {
        name: "In N Out",
        rating: 99,
        image: "https://cdn.vox-cdn.com/thumbor/CQnEtpjyZBE8E_RNQavmOoFHQhU=/0x0:4519x2758/1200x800/filters:focal(1899x1018:2621x1740)/cdn.vox-cdn.com/uploads/chorus_image/image/60033615/20832096314_7323ec81cc_o.0.jpg"       
    },

    {
        name: "Sam's Hamburger",
        rating: 100,
        image: "https://cantwellsmarket.com/wp-content/uploads/2018/06/HAMBURGER.jpg"
    },

    {
        name: "Burger King",
        rating: 25,
        image: "https://cdn.vox-cdn.com/thumbor/CQnEtpjyZBE8E_RNQavmOoFHQhU=/0x0:4519x2758/1200x800/filters:focal(1899x1018:2621x1740)/cdn.vox-cdn.com/uploads/chorus_image/image/60033615/20832096314_7323ec81cc_o.0.jpg"       
    }

    //AU CHEVAL
]



/**************
               ROUTES
**************/

app.get("/", function(req, res) {
    res.render("home.ejs", {data: burgersDatabase})
});

app.get("/addBurgerJoint", function(req, res){
    res.render("addBurger.ejs");
});

app.post("/addBurgerPostRequest", function(req, res){
    console.log(req.body)
    let newBurger = {
        name: req.body.restaurantName,
        rating: req.body.burgerRating,
        image: ""
    }
    
    burgersDatabase.push(newBurger)
    res.redirect("/")
})


/*************
              TURN ON SERVER AND LISTEN FOR REQUESTS
 ************/
app.listen(port, () => {console.log(`Currently running full blast on port ${port}`)});
