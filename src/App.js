import React, {useState} from 'react';
import Modal from './Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="배너배팅 결과">
        !Hello-Modal!
      </Modal>
    </>
  );
}

export default App;
