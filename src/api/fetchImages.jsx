import axios from 'axios';

export const fetchImages = async (query, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      q: `${query}`,
      page: `${page}`,
      key: '30590419-c6ba1589c1309a9e3b7d1fa75',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  const { hits } = response.data;
  const dataImages = hits.map(({ id, tags, webformatURL, largeImageURL }) => ({
    id,
    tags,
    webformatURL,
    largeImageURL,
  }));
  return dataImages;
};
