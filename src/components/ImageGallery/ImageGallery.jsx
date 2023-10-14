import { ItemGalleryImage } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStld, ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => (
  <ImageGalleryStld>
    {images.map(({ id, webformatURL }) => (
      <ImageGalleryStyled key={id}>
        <ItemGalleryImage webformatURL={webformatURL} />
      </ImageGalleryStyled>
    ))}
  </ImageGalleryStld>
);
