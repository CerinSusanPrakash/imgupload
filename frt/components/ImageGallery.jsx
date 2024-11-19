import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/images');
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
                        <img src={`http://localhost:5000/${image.imagePath}`} alt={image.imageName} style={{ width: '200px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
