import { useState } from 'react';
import axios from 'axios';
// import { uploadImageText } from '../../features/services/serviceSlice';
import { useDispatch } from 'react-redux';

const Upload = () => {
  const [fileInput, setFileInput] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
  });

  const { name, desc } = formData;

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setPreviewSource('');
    setFileInput('');
    setFormData({
      name: '',
      desc: '',
    })
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      //  const userData = name ;
      //  dispatch(uploadImageText(name));
      console.log(name);
      await axios.post('http://localhost:5000/api/products', {
        data: base64EncodedImage,
        name: name,
        desc: desc,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e) => {
    const file = e.target.files[0];
    setFileInput(e.target.value);
    previewFile(file);
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  return (
    <div
      className='mt-5 pt-5 d-sm-flex align-items-center justify-content-left'
      style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
    >
      <div className='m-4 p-4'>
        <form className='gallery-form' onSubmit={handleSubmitForm}>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            placeholder=' Enter Picture Name'
            className='form-input-control my-4'
            onChange={onChange}
          />
          <textarea
            name='desc'
            id='desc'
            className='form-input-control my-2'
            onChange={onChange}
            value={desc}
            placeholder=' Add Picture description'
            cols='20'
            rows='2'
          ></textarea>
          <input
            type='file'
            className='my-2'
            onChange={handleInputChange}
            value={fileInput}
          />
          <button type='submit'>submit</button>
        </form>
      </div>
      <div>
        <div >
          {previewSource && (
            <img src={previewSource} alt='' className='img-fluid w-md-50' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
