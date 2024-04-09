import axios from 'axios';

const {
    VITE_CLOUDINARY_UPLOAD_PRESET: Upload_Preset,
    VITE_CLOUDINARY_CLOUD_NAME: Cloud_Name
} = import.meta.env;

const url = `https://api.cloudinary.com/v1_1/${Cloud_Name}/image/upload`;

/**
 * The useImageUpload custom hook uploads an image file.
 * @returns The function `useImageUpload` is returning the `secure_url` property from the data of the
 * uploaded image.
 */
const useImageUpload = async (file) => {
    const data = {
        file,
        upload_preset: Upload_Preset
    }
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    };
    const uploaded = await axios.post(url, data, config);

    return uploaded.data.secure_url

}

export { useImageUpload }