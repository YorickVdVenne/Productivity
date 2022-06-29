import React from 'react';
import Arrow from '../Arrow';
import UpArrow from '../UpArrow';
import styles from './RecentActivitiesCard.module.scss';

export default function RecentActivitiesCard() {

    return (
        <div className={styles.recent}>
            <div className={styles.card_wrapper}>
                <div className={styles.card}>
                    <img  className={styles.profile} src='../../../assets/tina-turnster.svg' />
                    <div className={styles.text_wrapper}>
                        <p className={styles.title}>Tina Assigned an team objective to you</p>
                        <p className={styles.role}>2 hours ago</p>
                    </div>
                </div>
            </div>
            <div className={styles.card_wrapper}>
                <div className={styles.card}>
                    <img  className={styles.profile} src='../../../assets/mike-rek.svg' />
                    <div className={styles.text_wrapper}>
                        <p className={styles.title}>Mike completed an team objective!</p>
                        <p className={styles.role}>4 hours ago</p>
                    </div>
                </div>
            </div>
            <div className={styles.card_wrapper}>
                <div className={styles.card}>
                    <img  className={styles.profile} src='../../../assets/tina-turnster.svg' />
                    <div className={styles.text_wrapper}>
                        <p className={styles.title}>Tina added a new key result</p>
                        <p className={styles.role}>8 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
