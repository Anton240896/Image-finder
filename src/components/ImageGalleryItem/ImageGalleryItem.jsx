import { ItemGallery } from './ImageGalleryItem.styled';

export const ItemGalleryImage = ({ id, webformatURL, largeImageURL }) => (
  <ItemGallery src={webformatURL} alt={id} />
);
