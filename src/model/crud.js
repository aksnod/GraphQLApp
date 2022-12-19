const mongoose = require("mongoose");


const crudSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    address:{
        type: String,
    }

   
    
       
     
   
  },
  {
    timestamps: true,
  }
);




module.exports = mongoose.model("crud", crudSchema);
