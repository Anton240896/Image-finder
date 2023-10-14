import { ItemGallery } from './ImageGalleryItem.styled';

export const ItemGalleryImage = ({ id, webformatURL }) => (
  <ItemGallery>
    <img
      src={webformatURL}
      alt={id}
      loading="lazy"
      width="340"
      height="255"
    ></img>
  </ItemGallery>
);
