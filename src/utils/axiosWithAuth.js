import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://dad-jokes-7.herokuapp.com/',
    headers: {
      Authorization: token
    }
  })
}