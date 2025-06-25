import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName: {
        type: String, 
        require: true, 
        unique: true
    }, 
    fullName: {
        type: String, 
        require: true
    }, 
    email: {
        type: String, 
        require: true, 
        unique: true
    }, 
    password: {
        type: String, 
        require: true, 
        minLength: 6
    },
    followers: [
        {
            //(we are pushing the userID in the followers array of objects)
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User", 
            default: []
        }
    ],
        following: [
            {
                //(we are pushing the userID in the followers array of objects)
                type: mongoose.Schema.Types.ObjectId, 
                ref: "User", 
                default: []
    
            }
    ], 
    profileImg: {
        //we age going to sava the image in cloudinary after we save the image cloudinary give as a string like address thats what we give type as a string 
        type: String, 
        default: ""
    }, 
    coverImg: {
        type: String, 
        default: ""
    },
    bio: {
        type: String,
        default: "", 
    }, 
    link: {
        type: String, 
        default: ""
    }
}, {timestamps: true}) // the timestamps give 2 field which is, 1. the information like when the user created and 2. when the user is modified 
