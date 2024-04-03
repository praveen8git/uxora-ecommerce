import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    profilePicture: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: "customer"
    },
    token: String
})

export default mongoose.model('Customer', CustomerSchema);