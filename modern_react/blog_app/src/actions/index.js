import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=monkey-business';
const url = `${ROOT_URL}${API_KEY}`;

export function fetchPosts() {
  console.log('Action running: fetchPosts');
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}


export function createPost(props) {
  const request = axios.post(url, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/${id}${API_KEY}`)

  return {
    type: FETCH_POST,
    payload: request
  };
}
