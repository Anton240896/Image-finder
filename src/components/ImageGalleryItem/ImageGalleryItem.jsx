import { ItemGallery } from './ImageGalleryItem.styled';

export const ItemGalleryImage = ({ id, webformatURL }) => (
  <ItemGallery src={webformatURL} alt={id} />
);
