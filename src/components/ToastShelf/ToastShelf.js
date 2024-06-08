import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastObjects}) {

  return (
    <ol className={styles.wrapper}>
      {toastObjects.map((element) => (
        <li className={styles.toastWrapper} key={element.id}>
          <Toast
            variant={element.variant}
            message={element.message}
            isClosed={element.isClosed}
            handleClose={element.handleClose}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
