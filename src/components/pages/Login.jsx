import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { login, reset } from '../../features/auth/authSlice';
import Spinner from '../Spinner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

     const { user, isLoading, isError, isSuccess, message } = useSelector(
       (state) => state.auth
     );
     useEffect(() => {
       if (isError) {
         toast.error(message);
       }
       if (isSuccess || user) {
         navigate('/');
       }
     }, [user, isError, isLoading, isSuccess, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email, 
      password
    }

    dispatch(login(userData));
  };


   if (isLoading) {
     return <Spinner />;
   }
  return (
    <div>
      <div style={{ height: '10vh' }}></div>
      <form
        onSubmit={onSubmit}
        className='container form-control mt-5 p-5 w-sm-50'
        style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
      >
        <h1 className='d-flex justify-content-center'>
          <FaUserAlt />
        </h1>
        <p className='text-center lead'>Login</p>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          placeholder='Please Enter Your Email'
          className=' form-input-control my-4'
          onChange={onChange}
        />
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          placeholder='Please Enter Your Password'
          className=' form-input-control my-4'
          onChange={onChange}
        />
        <button
          type='submit'
          className='btn btn-dark btn-block form-control my-4'
        >
          Submit
        </button>
        Don't have an Account?
        <Link to='/register'> Create Account</Link>
      </form>
      <div></div>
    </div>
  );
};

export default Login;
