import React from 'react';
import styles from './AvarageScores.module.scss';
import RatingStars from '../RatingStars';

export default function AvarageScores() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.row}>
            <div className={styles.left}>
                <h3 className={styles.title}>Self-evaluation</h3>
            </div>
            <div className={styles.right}>
                <RatingStars fixed={true} value={4.0} size={'30px'} />
                <span className={styles.score}>4.0</span>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.left}>
                <h3 className={styles.title}>Peerfeedback</h3>
            </div>
            <div className={styles.right}>
                <RatingStars fixed={true} value={3.5} size={'30px'} />
                <span className={styles.score}>3.5</span>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.left}>
                <h3 className={styles.title}>Teamlead</h3>
            </div>
            <div className={styles.right}>
                <RatingStars fixed={true} value={4.5} size={'30px'} />
                <span className={styles.score}>4.5</span>
            </div>
        </div>
    </div>
  );
}
