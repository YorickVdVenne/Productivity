import React from 'react';
import ProgressBar from '../ProgressBar';
import SecondaryCreateButton from '../SecondaryCreateButton';
import styles from './GoalCard.module.scss';

export default function GoalCard({objective, showModal}) {
console.log(objective)
  return (
    <div className={styles.card}>
        <div className={styles.header}>
            <h3 className={styles.title}>{objective?.objective}</h3>
            <div className={styles.add}>
                <SecondaryCreateButton 
                    buttonTitle={'Add key result'}
                    onClick={() => showModal(true)}
                />
            </div>
        </div>
        <div className={styles.progress}>
            <ProgressBar />
            <span className={styles.quarter}>{objective?.quarter}</span>
        </div>
    </div>
  );
}
