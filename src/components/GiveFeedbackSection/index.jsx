import React from 'react';
import styles from './GiveFeedbackSection.module.scss';
import Link from 'next/link';
import Arrow from '../Arrow';

export default function GiveFeedbackSection() {

    return (
        <div className={styles.list}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <img className={styles.profile} src='../../../assets/mike-rek.svg' />
                    <div className={styles.text_wrapper}>
                        <p className={styles.title}>Mike asked for your feedback</p>
                        <p className={styles.time}>8 hours ago</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <Link href='/employee/goals'>
                        <a className={styles.link}>
                            <span className={styles.link_text}>Give feedback</span>
                            <Arrow blue={true}/>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <img className={styles.profile} src='../../../assets/rob-boss.svg' />
                    <div className={styles.text_wrapper}>
                        <p className={styles.title}>Rob asked for your feedback</p>
                        <p className={styles.time}>12 hours ago</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <Link href='/employee/goals'>
                        <a className={styles.link}>
                            <span className={styles.link_text}>Give feedback</span>
                            <Arrow blue={true}/>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <img className={styles.profile} src='../../../assets/tina-turnster.svg' />
                    <div className={styles.text_wrapper}>
                        <p className={styles.title}>Tina asked for your feedback</p>
                        <p className={styles.time}>a day ago</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <Link href='/employee/goals'>
                        <a className={styles.link}>
                            <span className={styles.link_text}>Give feedback</span>
                            <Arrow blue={true}/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
