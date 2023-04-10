import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import { loadImages, reset } from '../../features/services/serviceSlice';
import Upload from '../imgComponents/Upload';

function Gallery() {
  const [photos, setPhotos] = useState('')
  const { user } = useSelector((state) => state.auth);
  const { images } = useSelector((state) => state.Images);


  
const loadImages = async () => {
  const {data} = await axios.get('http://localhost:5000/api/products')
  setPhotos(data)
}


useEffect(() => {

  loadImages()
  }, [images]);

  return (
    <div>
      {user && user.email === 'adminbeautycomplex@gmail.com' ? (
        <Upload />
      ) : (
        <div></div>
      )}

      <div className='d-flex flex-column mt-5 pt-5' >
        {photos && photos.map((photo, index) => (
          
          <div  key={index} ><img className='img-fluid' src={photo.url} alt={photo.name}  />
          <div className='m-2'><p className='lead'>{photo.name}</p>
          <span>{photo.desc}</span>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
