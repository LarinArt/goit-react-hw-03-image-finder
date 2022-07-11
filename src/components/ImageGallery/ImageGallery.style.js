import styled from 'styled-components';

export const ImageGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 100px;
  padding: 50px 0;
`;

export const Img = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;

export default ImageGalleryList;
