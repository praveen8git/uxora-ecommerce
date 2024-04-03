import axios from 'axios';

const {
    VITE_CLOUDINARY_UPLOAD_PRESET: Upload_Preset,
    VITE_CLOUDINARY_CLOUD_NAME: Cloud_Name
} = import.meta.env;

const url = `https://api.cloudinary.com/v1_1/${Cloud_Name}/image/upload`;

const useImageUpload = async (file) => {
    const uploaded = await axios.post(url, {
        upload_preset: Upload_Preset,
        file: file
    })

    return uploaded.secure_url

} 

export { useImageUpload }