import React, { useEffect, useCallback } from 'react';
import './Modal.css';

import Card from '../Card';
import Profile from '../Profile';

const Modal = ({
  close,
  users,
  userSize,
  setUserSize,
  fetch,
  errorMsg,
  selectedUser,
  setSelectedUser,
  layout,
}) => {
  useEffect(() => {
    if (!users.length) {
      fetch();
    }
  }, [fetch, users]);

  const validateInput = useCallback(
    (evt) => {
      const { value } = evt.target;
      const onlyNumber = /^\d+$/;
      if (value === '') {
        setUserSize(value);
        return;
      }
      if (onlyNumber.test(value)) {
        setUserSize(value);
      } else {
        setUserSize(userSize);
      }
    },
    [setUserSize, userSize],
  );

  const getLayout = () => {
    if (!layout) return null;

    return layout.map((row) => (
      <div className="row">
        {row.map((user) => (
          <Card
            {...user}
            selectedUser={selectedUser}
            key={user.id}
            onClick={() => {
              setSelectedUser(user.id);
            }}
            width={100 / layout[0].length}
          />
        ))}
      </div>
    ));
  };

  return (
    <div className="modal">
      <div className="close" onClick={close}>
        X
      </div>
      {!users.length && <div className="loading">loading...</div>}
      <div className="userGrid">{getLayout()}</div>
      {selectedUser && (
        <Profile user={users.find((u) => u.id === selectedUser)} />
      )}
      {errorMsg && <div className="errorMsg">{errorMsg}</div>}
      <div className="footer">
        <div className="interactSection">
          <label>Inserisci il numero degli utenti</label>
          <input
            placeholder="type users number"
            onChange={validateInput}
            value={userSize}
          />
        </div>
        <div>
          <button onClick={() => fetch()}>Scarica nuovi utenti</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
