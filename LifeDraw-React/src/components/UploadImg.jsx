import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [images, setImages] = useState([]);



  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
  
    try {
      const response = await axios.post('http://localhost:8080/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Server response:', response.data); // Verifique se a resposta do servidor está correta
      alert('Image uploaded successfully');
      fetchImages(); // Fetch images again after successful upload
    } catch (error) {
      console.error(error);
      alert('Failed to upload image');
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && <img src={preview} alt="preview" width="100" />}
        <button type="submit">Upload</button>
      </form>

    </div>
  );
}

export default App;
