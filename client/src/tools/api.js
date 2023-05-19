import axios from 'axios';

export async function authenticateUser() {
    const response = await axios.post('http://localhost:3001/api/v1/user/login');
    return response.data;
  }
export async function createUserAccount() {
    const response = await axios.post('http://localhost:3001/api/v1/user/signup');
    return response.data;
  }
export async function getProfileData() {
    const response = await axios.post('http://localhost:3001/api/v1/user/profile');
    return response.data;
  }
export async function updateUserProfile() {
    const response = await axios.put('http://localhost:3001/api/v1/user/profile');
    return response.data;
  }