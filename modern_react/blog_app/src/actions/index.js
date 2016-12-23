import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=123';
const url = `${ROOT_URL}${API_KEY}`;

export function fetchPosts() {
  console.log('Action running: fetchPosts');
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
