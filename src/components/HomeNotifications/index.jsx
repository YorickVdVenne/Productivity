import React from 'react';
import styles from './HomeNotifications.module.scss';
import Link from 'next/link';
import Arrow from '../Arrow';

export default function HomeNotifications() {
    
    return (
        <div className={styles.list}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <img className={styles.profile} src='../../../assets/mike-rek.svg' />
                    <div className={styles.text_wrapper}>
                        <p className={styles.title}>Mike asked you for your feedback</p>
                        <p className={styles.time}>8 hours ago</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <Link href='/employee/feedback/give'>
                        <a className={styles.link}>
                            <span className={styles.link_text}>Give feedback</span>
                            <Arrow blue={true}/>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <img className={styles.profile} src='../../../assets/john-doe.svg' />
                    <div className={styles.text_wrapper}>
                        <p className={styles.title}>John, please complete your self-assessment</p>
                        <p className={styles.time}>12 hours ago</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <Link href='/employee/feedback/give'>
                        <a className={styles.link}>
                            <span className={styles.link_text}>Self-assessment</span>
                            <Arrow blue={true}/>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <img className={styles.profile} src='../../../assets/io-profile.svg' />
                    <div className={styles.text_wrapper}>
                        <p className={styles.title}>Don't forget to track your progress!</p>
                        <p className={styles.time}>a day ago</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <Link href='/employee/goals'>
                        <a className={styles.link}>
                            <span className={styles.link_text}>Goals</span>
                            <Arrow blue={true}/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
