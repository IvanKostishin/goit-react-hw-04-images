import axios from 'axios';

const KEY = '34322174-2bb2d5b62b2bbc36c28141246';

export const fetchImages = async (search, page) => {
  return await axios.get(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`
  );
};
