import React from 'react';
import { ImageWraper } from './ImageGalleryItem.styled';
import { ModalWindow } from 'components/Modal/Modal';

export class ImageGalleryItem extends React.Component {
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

    return (
      <ImageWraper>
        <img
          onClick={this.openModal}
          src={webformatURL}
          alt={tags}
          loading="lazy"
          width="330"
          height="270"
        />
        <ModalWindow
          largeImageURL={largeImageURL}
          isOpenModalOpen={isModalOpen}
          onCloseModal={this.closeModal}
          tags={tags}
        />
      </ImageWraper>
    );
  }
}
