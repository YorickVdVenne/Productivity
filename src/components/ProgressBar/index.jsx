import React from 'react';
import styles from './ProgressBar.module.scss';

export default function ProgressBar({progress}) {

  const progressValue = `${progress}%`;
  const green = progress > 50 ? true : false;

  return (
    <div className={styles.bar}>
      <span
        style={{'--progress': progressValue}}
        className={`${styles.progress} ${green ? styles.green : ''}`} data-progress="100"><span className={styles.text}>{progress}%</span>
      </span>
    </div>
  );
}
