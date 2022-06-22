import React from 'react';
import styles from './SecondaryCreateButton.module.scss';

export default function SecondaryCreateButton({buttonTitle, onClick}) {
  return (
    <>
      <button className={styles.button} onClick={() => {onClick();}}>
        <span className={styles.text}>{buttonTitle}</span>
      </button>
    </>
  );
}
