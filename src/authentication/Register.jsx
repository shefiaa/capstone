import React, { useState } from 'react';
import axios from 'axios';
const RegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isLoginForm, setIsLoginForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration or login logic here based on isLoginForm state
    if (isLoginForm) {
      console.log('Login submitted:', formData);
      // You can add your login logic here using formData.username and formData.password
    } else {
      console.log('Register submitted:', formData);
      // You can add your registration logic here
    }
  };

  const handleLoginToBackend = async () => {
    try {
        // Data yang akan dikirim ke backend
        const dataToSend = {
            taskIndex,
            colIndex,
            // tambahkan data lain sesuai kebutuhan
        };

        // Mengirim data ke backend melalui API endpoint
        const response = await axios.post('http://localhost:3000/signIn', formData);


        // Misalnya, perbarui state komponen atau lakukan tindakan berdasarkan respons
        if (response.data.success) {
            // Handle respons dari backend jika diperlukan
        console.log('Response from backend:', response.data);
            // Lakukan sesuatu jika respons menyatakan keberhasilan
            // Contoh: Perbarui state komponen, tampilkan pesan sukses, dll.
        } 
    } catch (error) {
        // Handle error jika terjadi kesalahan
        console.error('Error sending data to backend:', error.message);
        // Misalnya, tampilkan pesan kesalahan kepada pengguna
    }
};

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">{isLoginForm ? 'Sign In' : 'Create an account'}</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        {!isLoginForm && (
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        )}
        {!isLoginForm && (
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        {isLoginForm && (
          <div className="mb-4">
            <label htmlFor="loginUsername" className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="loginUsername"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        )}
        <button
          type="submit"
          onClick={handleLoginToBackend}
          className="bg-[#635fc7] text-white p-2 rounded-md w-full hover:opacity-75"
        >
          {isLoginForm ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      <p className="text-sm mt-4">
        {isLoginForm
          ? "Don't have an account? "
          : 'Already have an account? '}
        <span
          className="text-[#635fc7] cursor-pointer"
          onClick={() => setIsLoginForm(!isLoginForm)}
        >
          {isLoginForm ? 'Sign Up' : 'Sign In'}
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
