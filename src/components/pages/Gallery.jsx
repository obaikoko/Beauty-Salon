import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, loadImage } from '../../features/products/productSlice';
import Spinner from '../Spinner';
// import axios from 'axios';
// import { loadImages, reset } from '../../features/services/serviceSlice';
import Upload from '../imgComponents/Upload';
import { toast } from 'react-toastify';

function Gallery() {
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState('');
  const { user } = useSelector((state) => state.auth);
  const { images, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.products
  );

  // console.log(images);

  useEffect(() => {
    if (isSuccess) {
      setPhotos(images);
    }
    dispatch(loadImage());
  }, [isError, isSuccess, message]);

  const handleDelete = () => {};

  return (
    <div>
      {user && user.email === 'adminbeautycomplex@gmail.com' ? (
        <Upload />
      ) : (
        <div></div>
      )}
      {isLoading ? (
        <div className='text-center align-items-center justify-content-center '>
          <Spinner />
        </div>
      ) : (
        <div className='d-flex flex-column mt-5 pt-5'>
          {photos ? (
            <>
              {photos &&
                photos.map((photo, index) => (
                  <div key={index}>
                    <img
                      className='img-fluid'
                      src={photo.url}
                      alt={photo.name}
                    />
                    <div
                      className='mb-1 text-center'
                      style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                    >
                      {user && user.email === 'adminbeautycomplex@gmail.com' ? (
                        <button
                          onClick={() => {
                            dispatch(deleteProduct(photo.Id));
                            if (isSuccess) {
                              toast(`${photo.name} has been deleted successfully`)
                            }
                          }}
                        >
                         {` delete ${photo.name}`}
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <>
              <h1>GALLERY IS EMPTY</h1>
            </>
          )}

          {/* */}
        </div>
      )}
    </div>
  );
}

export default Gallery;
