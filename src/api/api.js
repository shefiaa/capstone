// File: api.js
import axios from './axiosConfig'; // Sesuaikan path dengan struktur proyek Anda

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000'); // endpoint
    return response.data; // Mengembalikan data dari respons
  } catch (error) {
    throw error; // Melemparkan error untuk ditangani oleh pemanggil
  }
};

export { fetchData };
