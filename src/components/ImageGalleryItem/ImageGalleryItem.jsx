import React from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import { ImageWraper } from './ImageGalleryItem.styled';

export class ItemGalleryImage extends React.Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { isModalOpen } = this.state;
    const openModal = this.openModal;
    const closeModal = this.closeModal;
    return (
      <ImageWraper>
        <img
          onClick={openModal}
          src={webformatURL}
          alt={tags}
          loading="lazy"
          width="330"
          height="270"
        />
        <ModalWindow
          largeImageURL={largeImageURL}
          isOpenModalOpen={isModalOpen}
          onCloseModal={closeModal}
          tags={tags}
        />
      </ImageWraper>
    );
  }
}
