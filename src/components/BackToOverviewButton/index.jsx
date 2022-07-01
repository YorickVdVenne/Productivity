import React from 'react';
import styles from './BackToOverviewButton.module.scss';
import Link from 'next/link';

export default function BackToOverviewButton() {
  return (
    <Link href="/employee/feedback">
        <a className={styles.button}>
            <img className={styles.arrow} src='../../../assets/back-arrow.svg' />
            <span className={styles.text}>Back to overview</span>
        </a>
    </Link>
  );
}
