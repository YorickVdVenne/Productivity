import React from 'react';
import styles from './ProgressBar.module.scss';

export default function ProgressBar() {
  return (
    <div className={styles.bar}>
      <span
        style={{'--progress': '20%'}}
        className={styles.progress} data-progress="100"><span className={styles.text}>0%</span>
      </span>
    </div>
  );
}
