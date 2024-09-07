import React, {useEffect, useState} from "react";
import axios from "axios";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/gallery');
        setGallery(response.data);
      } catch (error) {
        console.error('Error fetching gallery:', error);
      }
    };

    fetchGallery();
  }, []);


  
    return(
      <>
      <div className="GalleryTitle">
        <h3>Gallery</h3>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="http://localhost:5173/"> 
                <span style={{ fontSize: 16}}>Home</span>
              </a>
            </li>
            <li className="breadcrumb-item active">
              <span style={{ fontSize: 16}}> News & Events</span>
            </li>
            <li className="breadcrumb-item active">
              <span style={{ fontSize: 16}}> Gallery</span>
            </li>
          </ol>
        </nav>
      </div>
      <div className = "gallery-container">
        {gallery.map((item) => (
          <div key={item.albumID} className="gallery-tile">
            <img src ={item.albumCoverURL} alt={item.albumCoverURL}/>
            <h2>{item.albumName}</h2>
            {/* <b><p>Album created by: {item.albumCreatedBy}</p></b> */}
            <a href={item.albumURL} target="_blank" rel="noopener noreferrer">Click here for more images</a>
          </div>
        ))}
      </div>
      
      
        </>
    );
  }
  
  export default Gallery;