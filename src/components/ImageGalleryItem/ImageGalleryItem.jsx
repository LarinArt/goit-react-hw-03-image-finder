import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.style';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  return (
    <Item>
      <Img
        src={webformatURL}
        data-source={largeImageURL}
        onClick={onClick}
        loading="lazy"
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
