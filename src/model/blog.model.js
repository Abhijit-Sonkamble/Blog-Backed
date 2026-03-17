const mongoose = require("mongoose");

const blogSchema = mongoose.Schema ({

    title: {
        type : String,
        required : true
    },
     content: {
        type : String,
        required : true
    },
     category: {
        type : String,
        required : true
    },
    isPublished : { 
        type: Boolean,
        default: true
    },
    authorId: {
        type : String,
        // required : true
    },
isDeleted: {
  type: Boolean,
  default: false
},
    create_at : { 
        type: String,
        required: true
    },
    update_at : { 
        type: String,
        required: true
    },

});

module.exports = mongoose.model("Blog", blogSchema, "Blog")