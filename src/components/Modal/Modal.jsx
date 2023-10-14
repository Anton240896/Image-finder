import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    right: 'auto',
    bottom: 'auto',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(41, 14, 14, 0.8)',
  },
};

ReactModal.setAppElement('#root');

export const ModalWindow = ({ isOpen, onCloseModal, largeImageURL, tags }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={largeImageURL} alt={tags} />
    </ReactModal>
  );
};
