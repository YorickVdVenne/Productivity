import React from 'react';
import styles from './CloseButton.module.scss';

export default function CreateButton({onClick}) {
  return (
    <>
      <button className={styles.button} onClick={() => {onClick();}}>
        <img className={styles.icon} src="../../assets/iconfinder_circle_close_delete_remove_trash_763469.svg"/>
      </button>
    </>
  );
}
