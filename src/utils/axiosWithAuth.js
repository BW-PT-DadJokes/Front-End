import axios from 'axios';

// A helper function so we don't have to keep repeating this
export function getToken() {
  return localStorage.getItem("token")
}

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://dad-jokes-7.herokuapp.com/api',
    headers: {
      Authorization: token
    }
  })
}