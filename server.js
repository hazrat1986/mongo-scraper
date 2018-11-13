
let express = require('express'); // Express Server
let bodyParser = require('body-parser'); // Post Body Request
let exphbs = require('express-handlebars');

var db = require("./models"); 


let PORT = process.env.PORT || 8080; 
let app = express(); 

// Configure middleware 


app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(express.static("public")); 

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configure Routes 
require("./controllers/webScrapperController.js")(app);

//Execution 

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
})