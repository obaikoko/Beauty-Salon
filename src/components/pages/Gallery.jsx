import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {FaTrash} from 'react-icons/fa'
import { deleteProduct, loadImage } from '../../features/products/productSlice';
import Spinner from '../Spinner';
import Upload from '../imgComponents/Upload';
import { toast } from 'react-toastify';

function Gallery() {
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState('');
  const { user } = useSelector((state) => state.auth);
  const { images, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (isSuccess) {
      setPhotos(images);
    }
    dispatch(loadImage());
  }, [isError, isSuccess, message]);

  return (
    <div>
      {user && user.email === 'adminbeautycomplex@gmail.com' && <Upload />}
      {isLoading ? (
        <div className='text-center'>
          <Spinner />
        </div>
      ) : (
        <div className='container mt-5'>
          {photos && photos.length > 0 ? (
            <div className='row row-cols-1 row-cols-md-3 g-4'>
              {photos.map((photo) => (
                <div key={photo.id} className='col'>
                  <div className='card'>
                    <img
                      src={photo.url}
                      alt={photo.name}
                      className='card-img-top rounded'
                    />
                  </div>
                
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center'>
              <h1>GALLERY IS EMPTY</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Gallery;
