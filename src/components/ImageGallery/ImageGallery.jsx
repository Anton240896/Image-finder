import { ItemGalleryImage } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStld } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryStld>
      {images.map(({ id, webformatURL, largeImageUrl, tags }) => {
        return (
          <ItemGalleryImage
            key={id}
            webformatURL={webformatURL}
            largeImageUrl={largeImageUrl}
            tags={tags}
          ></ItemGalleryImage>
        );
      })}
    </ImageGalleryStld>
  );
};
