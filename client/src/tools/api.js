import axios from 'axios';

export async function authenticateUser(email, password) {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', {
      email: email,
      password: password
    });
    // console.log(response);
    return response.data.body.token;
  }
export async function createUserAccount() {
    const response = await axios.post('http://localhost:3001/api/v1/user/signup');
    return response.data;
  }
  export async function getProfileData(token) {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', null, getHeader(token));
      return response.data.body;
    } catch (error) {
      console.error('Error fetching profile data:', error);
      throw error;
    }
  }
export async function updateUserProfile(firstName, lastName, token) {
  // console.log(token);
  try {
    const response = await axios.put('http://localhost:3001/api/v1/user/profile', {
      firstName: firstName,
      lastName: lastName
    }, getHeader(token));

    return response.data.body;

  } catch (error) {
    console.error('Error updating profile data:', error);
    throw error;
  }
  }

  function getAuth (token) {
    return {
        Authorization: `Bearer ${token}`,
      }
  }
  function getHeader (token) {
    return {
      headers: getAuth(token)
    }
  }