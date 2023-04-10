import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { register, reset } from '../../features/auth/authSlice';
import Spinner from '../Spinner';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() =>
    {
      if(isError) {
        toast.error(message);
      }
      if (isSuccess || user) {
        navigate('/')
      }
      
    },
    [user, isError, isLoading, isSuccess, message, dispatch, navigate]
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('password do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner/>
  }
  return (
    <div>
      <div style={{ height: '10vh' }}></div>
      <form
        onSubmit={onSubmit}
        className='container form-control p-5 w-sm-25'
        style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
      >
        <h1 className='d-flex justify-content-center'>
          <FaUserAlt />
        </h1>
        <p className='text-center lead'>Create an Account</p>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          placeholder='Please Enter Your name'
          className='form-input-control my-4'
          onChange={onChange}
        />
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          placeholder='Please Enter Your Email'
          className='form-input-control my-4'
          onChange={onChange}
        />
        <input
          type='password'
          name='password2'
          id='password2'
          value={password2}
          placeholder='Please Confirm Your Password'
          className='form-input-control my-4'
          onChange={onChange}
        />
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          placeholder='Please Enter Your Password'
          className='form-input-control my-4'
          onChange={onChange}
        />
        <button
          type='submit'
          className='btn btn-dark btn-block form-control my-4'
        >
          Submit
        </button>
        Already have an Account?
        <Link to='/login'> Login</Link>
      </form>
    </div>
  );
};

export default Register;
