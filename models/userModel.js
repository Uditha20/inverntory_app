import mongoose from "mongoose";
import validator from "validator";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:[true,"please add a name"]
    },
    email:{
        type:String,
        require:[true,"please add a email"],
        unique:true,
        trim:true,
        lowercase:true,
        validate:[validator.isEmail,"please enter the email"]
    },
    password:{
        type:String,
        require:[true,"please add a password"],
        minLength:[6,"password have must above 6 character"]
    }, 
    // photo:{
    //     type:String,
    //     require:[true,"please add a photo"],
    // }
    phone:{
        default:"035",
        type:String,
    }

    
},{
    timestamps:true
})


const User=mongoose.model("User",userSchema)
export default User;