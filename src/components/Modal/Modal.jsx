import ReactModal from 'react-modal';

const stylesModal = {
  content: {
    top: '50%',
    right: 'auto',
    bottom: 'auto',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export const ModalWindow = ({
  isOpenModal,
  onCloseModal,
  largeImageURL,
  tags,
}) => {
  return (
    <ReactModal
      isOpen={isOpenModal}
      onRequestClose={onCloseModal}
      style={stylesModal}
      contentLabel="Image Modal"
    >
      <img src={largeImageURL} alt={tags} width="700px" height="500px" />
    </ReactModal>
  );
};
