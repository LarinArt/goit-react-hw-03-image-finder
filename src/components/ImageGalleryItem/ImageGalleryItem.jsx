import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.style';

export const ImageGalleryItem = ({
  description,
  smallImage,
  largeImage,
  openModal,
}) => {
  return (
    <Item onClick={openModal}>
      <Img src={smallImage} alt={description} data-large={largeImage} />
    </Item>
  );
};

ImageGalleryItem.prototype = {
  description: PropTypes.string,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
