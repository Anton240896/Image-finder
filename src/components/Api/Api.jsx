import axios from 'axios';

export async function fetchRequestApi(currentPage, query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY_API = '39074822-7a439c7ecb254f2e87bade55b';

  const params = new URLSearchParams({
    q: query,
    page: currentPage,
    key: KEY_API,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '27',
  });
  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
}
