import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onclick }) => (
  <li className={css.imageGalleryItem} id={image.id} onClick={onclick}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
      className={css.imageGalleryItemImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onclick: propTypes.func.isRequired,
};
