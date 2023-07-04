import mongoose from "mongoose";

const UsersBookSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: true,
            min: 2,
            unique: true,
        },
        Subtitle: {
            type: String,
        },
        Authors: {
            type: String,
            required: true,
        },
        Description: {
            type: String,
        },
        Publisher: {
            type: String,
            required: true,
        },
        PublishedDate: {
            type: String,
        },
    Category: {
        type: String,
        required: true,
        min: 3
    },
    Status: {
        type: String,
        required: true,
        enum: ["toread", "readingnow", "completed"],
    },
    LastPageRead: {
        type: Number,
    },
    Rating: {
        type: Number,
    },
},
    { timestamps: true }
)

const UsersBook = mongoose.model("UsersBook", UsersBookSchema);

export default UsersBook;