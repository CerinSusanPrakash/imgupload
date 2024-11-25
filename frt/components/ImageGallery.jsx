import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://imgupload-api.vercel.app/api/images');
                setImages(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            <h2>Image Gallery</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {images.map((image) => (
                    <div key={image._id}>
                        <img src={`https://imgupload-api.vercel.app/${image.imagePath}`} alt={image.imageName} style={{ width: '200px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
