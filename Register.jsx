import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';
import loginimg from '../../assets/Web/loginimg.png';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else {
      const usernameRegex = /^[a-z0-9]+$/;
      if (!usernameRegex.test(formData.username)) {
        newErrors.username = 'Username must not contain special characters or uppercase letters';
      }}
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);
      setFormData({
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setErrors({});
    }
  };

  return (
    <div 
      className='flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat'  
      style={{ backgroundImage: `url(${loginimg})` }}
    >
      <form 
        className='bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md w-full space-y-6' 
        onSubmit={handleSubmit}
        data-aos="fade-up" 
        data-aos-once="true" 
        data-aos-delay="300"
      >
        <h1 className='text-4xl text-center font-bold text-primary'>Register</h1>
        
        <div className='relative'>
          <input 
            type='text' 
            name='username'
            placeholder='Username' 
            value={formData.username}
            onChange={handleChange}
            required 
            className='w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:bg-gray-100'
          />
          <FaUser className='absolute top-2 right-3 text-gray-400' />
          {errors.username && <p className='text-red-500'>{errors.username}</p>}
        </div>

        <div className='relative'>
          <input 
            type='tel' 
            name='phone'
            placeholder='Your Phone Number' 
            value={formData.phone}
            onChange={handleChange}
            required 
            className='w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:bg-gray-100'
          />
          <FaPhone className='absolute top-2 right-3 text-gray-400' />
          {errors.phone && <p className='text-red-500'>{errors.phone}</p>}
        </div>

        <div className='relative'>
          <input 
            type='email' 
            name='email'
            placeholder='Email' 
            value={formData.email}
            onChange={handleChange}
            required 
            className='w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:bg-gray-100'
          />
          <FaEnvelope className='absolute top-2 right-3 text-gray-400' />
          {errors.email && <p className='text-red-500'>{errors.email}</p>}
        </div>

        <div className='relative'>
          <input 
            type='password' 
            name='password'
            placeholder='Password' 
            value={formData.password}
            onChange={handleChange}
            required 
            className='w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:bg-gray-100'
          />
          <FaLock className='absolute top-2 right-3 text-gray-400' />
          {errors.password && <p className='text-red-500'>{errors.password}</p>}
        </div>

        <div className='relative'>
          <input 
            type='password' 
            name='confirmPassword'
            placeholder='Confirm Password' 
            value={formData.confirmPassword}
            onChange={handleChange}
            required 
            className='w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:bg-gray-100'
          />
          <FaLock className='absolute top-2 right-3 text-gray-400' />
          {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword}</p>}
        </div>

        <button 
          type='submit' 
          className='w-full bg-primary text-white py-2 rounded-full hover:bg-primary-dark transition duration-300'>
          Register
        </button>

        <div className='text-center'>
          <p>Already have an account? <a href="/login" className='text-primary hover:underline'>Login</a></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
