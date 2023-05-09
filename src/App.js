import './App.css';
import React, { useState, useCallback } from 'react';
import Modal from './components/Modal';
import request from './utils/request';
import layoutAlgorithm from './utils/layoutAlgorithm';

function App() {
  const [isActiveModal, toggleModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [userSize, setUserSize] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [layout, setlayout] = useState();

  const fetchData = useCallback(async () => {
    const defaultSize = 5;
    if (Number(userSize) > 20) {
      setErrorMsg('Attenzione hai superato il massimo consentito (20)');
      return;
    }
    const response = await request.get(
      `?size=${Number(userSize) || defaultSize}`,
    );
    const l = layoutAlgorithm(response.data);
    setlayout(l);
    setUsers(response.data);
    setSelectedUser(response.data[0].id);
    setErrorMsg(null);
  }, [userSize]);

  if (isActiveModal) {
    return (
      <Modal
        close={() => toggleModal(false)}
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        userSize={userSize}
        setUserSize={setUserSize}
        fetch={fetchData}
        errorMsg={errorMsg}
        layout={layout}
      ></Modal>
    );
  }

  return (
    <div className="App">
      <button className="startButton" onClick={() => toggleModal(true)}>
        START DEMO
      </button>
    </div>
  );
}

export default App;
