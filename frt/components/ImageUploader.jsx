import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('https://imgupload-api.vercel.app/api/images/upload', formData);
            alert('Image uploaded successfully!');
            console.log(response.data);
        } catch (err) {
            console.error(err);
            alert('Failed to upload image');
        }
    };

    return (
        <div>
            <h2>Upload Image</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleImageChange} />
                {preview && <img src={preview} alt="Preview" style={{ width: '200px' }} />}
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default ImageUploader;
