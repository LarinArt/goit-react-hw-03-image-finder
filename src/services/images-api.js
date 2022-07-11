const URL = 'https://pixabay.com/api/';
const KEY = '27450205-8765e518dc84e5655ddf2d669';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

const fetchImages = (query, page = 1) => {
  return fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`).then(
    response => response.json()
  );
};

export default fetchImages;
