import React from 'react';
import styles from './DraggableProgressBar.module.scss';

export default function DraggableProgressBar({result, progressValue}) {

  return (
    <div className={styles.bar}>
        <input className={styles.slider} type="range" id="progress" min="0" max="100" defaultValue={result.progress} onChange={(e) => progressValue(e.target.value)}/>
    </div>
  );
}
