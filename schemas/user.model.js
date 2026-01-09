import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'User email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'User password is required'],
        minLength: 6,
    }
}, { timestamps: true });

const User = model("User", userSchema);

export default User;