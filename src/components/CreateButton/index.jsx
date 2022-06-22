import React from 'react';
import styles from './CreateButton.module.scss';

export default function CreateButton({buttonTitle, onClick}) {
  return (
    <>
      <button className={styles.button} onClick={() => {onClick();}}>
        <span className={styles.text}>{buttonTitle}</span>
      </button>
    </>
  );
}
