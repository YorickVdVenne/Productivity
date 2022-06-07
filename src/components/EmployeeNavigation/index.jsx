import React from 'react';
import styles from './Navigation.module.scss';
import Link from 'next/link';

export default function EmployeeNavigation() {
    return (
      <div className={styles.sidebar}>
        <Link href='/'>
            <img className={styles.logo} src="../../assets/iO-logo-transparent.svg"/>
        </Link>
        <div className={styles.links}>
            <Link href='/employee/home'>
                <a>
                    <img className={styles.icons} src="../../assets/home-icon.svg"/><br/>
                    Home
                </a>
            </Link>
            <Link href='/employee/goals'>
                <a>
                    <img className={styles.icons} src="../../assets/goals-icon.svg"/><br/>
                    Goals
                </a>
            </Link>
            <Link href='/employee/feedback'>
                <a>
                    <img className={styles.icons} src="../../assets/feedback-icon.svg"/><br/>
                    Feedback
                </a>
            </Link>
        </div>
      </div>
    );
  }