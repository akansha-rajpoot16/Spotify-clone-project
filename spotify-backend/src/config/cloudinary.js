import { v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async () => {
    await cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,   // ✔ correct
        api_key: process.env.CLOUDINARY_API_KEY,         // ✔ correct
        api_secret: process.env.CLOUDINARY_API_SECRET,   // ✔ correct
        secure: true
    })
}

export default connectCloudinary;

