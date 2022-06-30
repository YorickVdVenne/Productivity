import React from 'react';
import styles from './FeedbackTimeline.module.scss';

export default function FeedbackTimeline() {

    return (
        <div className={styles.timeline}>
            <div className={styles.quarters}>
                <span>Q1</span>
                <span>Q2</span>
                <span>Q3</span>
                <span>Q4</span>
            </div>
            <div className={styles.headline}> 
                <span className={styles.year}>2022</span>
                <span className={styles.year}>2023</span>
            </div>
            <div className={styles.secondline} />
            <div className={styles.months}>
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
            </div>
        </div>
    );
}
