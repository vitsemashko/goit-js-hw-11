import axios from 'axios';

export default async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '30251781-69548f5c16517c9b1a9610b78';
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
}
