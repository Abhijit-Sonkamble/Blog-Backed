const mongoose = require("mongoose");

const authorSchema = mongoose.Schema ({
author_name: {
        type : String,
        required : true
    },
     email: {
        type : String,
        required : true,
        unique : true // unique personality dete agar same asale tr error kinva notifacation deil
    },
     password: {
        type : String,
        required : true
    }
},{ timestamps: true });

module.exports = mongoose.model("Author", authorSchema, "Author")