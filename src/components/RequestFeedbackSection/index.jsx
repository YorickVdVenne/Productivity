import React from 'react';
import styles from './RequestFeedbackSection.module.scss';
import Link from 'next/link';
import Arrow from '../Arrow';

export default function RequestFeedbackSection() {

    return (
        <div className={styles.list}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <img className={styles.profile} src='../../../assets/io-profile.svg' />
                    <div className={styles.text_wrapper}>
                        <p className={styles.title}>Request feedback for upcoming annual review</p>
                        <p className={styles.time}>Oct</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <Link href='/employee/feedback/request'>
                        <a className={styles.link}>
                            <span className={styles.link_text}>Request feedback</span>
                            <Arrow blue={true}/>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <img className={styles.profile} src='../../../assets/io-profile.svg' />
                    <div className={styles.text_wrapper}>
                        <p className={styles.title}>Fill in your self-assessment</p>
                        <p className={styles.time}>Oct</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <Link href='/employee/goals'>
                        <a className={styles.link}>
                            <span className={styles.link_text}>Self-assessment</span>
                            <Arrow blue={true}/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
