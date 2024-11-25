import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type (e.g., allow only images)
            if (!file.type.startsWith('image/')) {
                alert('Please upload a valid image file');
                return;
            }

            // Validate file size (e.g., limit to 5MB)
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (file.size > maxSize) {
                alert('File size exceeds the 5MB limit');
                return;
            }

            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            alert('Please select an image to upload');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);

        setLoading(true);

        try {
            const response = await axios.post('https://imgupload-api.vercel.app/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert('Image uploaded successfully!');
            console.log('Response:', response.data);
        } catch (err) {
            console.error('Error:', err);
            alert('Failed to upload image. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Upload Image</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleImageChange} />
                {preview && <img src={preview} alt="Preview" style={{ width: '200px', margin: '10px' }} />}
                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Uploading...' : 'Upload'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ImageUploader;


// import React, { useState } from 'react';
// import axios from 'axios';

// const ImageUploader = () => {
//     const [image, setImage] = useState(null);
//     const [preview, setPreview] = useState(null);

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]);
//         setPreview(URL.createObjectURL(e.target.files[0]));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('image', image);

//         try {
//             const response = await axios.post('https://imgupload-api.vercel.app/upload', formData);
//             // const response = await axios.post('https://imgupload-api.vercel.app/api/images/upload', formData);
//             alert('Image uploaded successfully!');
//             console.log(response.data);
//         } catch (err) {
//             console.error(err);
//             alert('Failed to upload image');
//         }
//     };

//     return (
//         <div>
//             <h2>Upload Image</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="file" onChange={handleImageChange} />
//                 {preview && <img src={preview} alt="Preview" style={{ width: '200px' }} />}
//                 <button type="submit">Upload</button>
//             </form>
//         </div>
//     );
// };

// export default ImageUploader;
