import { ItemGalleryImage } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStld, ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => (
  <ImageGalleryStld>
    {images.map(image => (
      <ImageGalleryStyled key={image.id}>
        <ItemGalleryImage image={image} />
      </ImageGalleryStyled>
    ))}
  </ImageGalleryStld>
);
