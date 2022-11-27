import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
   
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
        type: String,
        required: true
        
      },
      firstname: {
        type: String,
        
      }, 
      lastname:{
        type:String
      },
      middlename:{
        type:String
      },
      address1:{
        type:String
      },
      address2:{
        type:String
      },
      city:{
        type:String
      },
      state:{
        type:String
      },
      zipcode:{
        type:Number
      },
      creditcardnum:{
        type:String
      },
      creditname:{
        type:String
      },
      creditexpdate:{
        type:String
      },
      creditcvv:{
        type:String
      },
      creditzip:{
        type:String
      },
      mileage:{
        type:Number,
        required: true,
    },
      flightOrder:{
          type: [
              {
                  flight: { type: String },
                  numPassenger: { type: Number }
              }
          ],
          default: [],
      },
    },
    { timestamps: true }
    
    );

export default mongoose.model("User", UserSchema);