// import the express module
var express = require("express");
// create an Express application. 
var app = express();

// callback function that is invoked when there's a GET request with the path ('/') relative to the site root.
// this function will print the text in quote on the browser when called
app.get("/",function(req,res){
  res.send("You're now at the homepage!");
});

// callback function that is invoked when there's a GET request with the path ('/restaurants') relative to the site root.
// this function will render the page restaurants.js when called.
// note the use of res.render instead of res.send
app.get("/restaurants",function(req,res){
  var restaurants = [{name:"Oug Jade Restaurant", image: "https://b.zmtcdn.com/data/menus/134/18197134/7bd257a91b7f9d974c90982aca8c3071.jpg"},
                    {name:"Sri Steven's Corner OUG", image:"http://1.bp.blogspot.com/-VQzAbQANnMg/VYjNCS4_ebI/AAAAAAAAC2Q/N2fma35yVLw/s1600/2015-06-16%2B13.33.jpg"},
                    {name:"myBurgerLab OUG ", image:"https://dp9pch6ue1it9.cloudfront.net/my/353/Restaurant_Gallery/b217ade64f3ced6eb0349b2e85acca0f_sq.jpg"},
                  {name:"The Forking Cork (OUG)", image:"http://www.broughtup2share.com/wp-content/uploads/2016/08/IMG_5434.jpg"},
                {name: "Restoran Yang Kee", image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/20/86/af/dry-beef-noodle-with.jpg"}];
  // send the array 'restaurants' to the ejs file
  // the parameter is sent with the convention {name of the variable in the ejs file : name of the variable we're sending over from here}}             
  res.render("restaurants.ejs",{restaurants:restaurants});
});


// callback function that is invoked when the looked-up path is not valid
app.get("*",function(req,res){
  res.send("The requested page is not found!");
});


//(1) use the following line if you run the code on a server (for e.g on the Cloud9 platform)
//app.listen(env.process.PORT, env.process.IP, function(){
//(2) use the following line if you are running the code on your computer
app.listen(3000,function(){
  // this callback function will print the line in quote when the server is successfully started and running
  console.log("Connected!");
})