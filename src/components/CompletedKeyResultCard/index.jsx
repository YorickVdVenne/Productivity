import React from 'react'; 
import styles from './CompletedKeyResultCard.module.scss';

export default function CompletedKeyResultCard({result}) {

    return (
        <div className={styles.card}>
            <p className={styles.title}>{result.result}</p>
            <div className={styles.wrapper}>
                <p className={styles.percentage}>done</p>
            </div>
        </div>
    );
}
