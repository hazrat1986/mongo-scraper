//Imports
let mongoose = require('mongoose');


let Schema = mongoose.Schema;


var commentSchema = new Schema({

  // `body` is of type String
  body: String

});


var Comment = mongoose.model("Comment", commentSchema);
// Export the Comment model
module.exports = Comment;
