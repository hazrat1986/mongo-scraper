//import
let mongoose = require('mongoose');

// Initialize 
let Schema = mongoose.Schema; 

//Model

let ArticleSchema = new Schema({ 

  headline: {
    type: String,
    required: true
  },

  summary: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  imageURL: {
    type: String,
    required: true
  },

  slug: {
    type: String
  },

  
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]

}); // End of New Schema

let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article; 
// Export the Article Model