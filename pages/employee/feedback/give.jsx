import React from 'react';
import dynamic from 'next/dynamic';
import BackToOverviewButton from '../../../src/components/BackToOverviewButton';
import GiveFeedbackForm from '../../../src/components/GiveFeedbackForm';
import styles from '../../../styles/Give.module.scss';
import Link from 'next/link';


const EmployeeNavigation = dynamic(() => import('../../../src/components/EmployeeNavigation'));

export default function Give() {
  const [sendStatus, setSendStatus] = React.useState(false);

  return (
    <div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        <div className={styles.header}>
            <BackToOverviewButton />
            <h1 className={styles.title}>Give <strong>Mike Rek</strong> feedback</h1>
        </div>
        <hr className={styles.line}/>
        <div className={styles.content}>
          <GiveFeedbackForm onSend={setSendStatus}/>
        </div>
      </div>
      {
        sendStatus ? (
        <>
          <div className={styles.curtain}></div>
          <div className={styles.modal}>

            <h3 className={styles.subtitle}>Feedback send!</h3>
            <Link href='/employee/feedback'>
              <a>
                <span className={styles.button}>Overview page</span>
              </a>
            </Link>
          </div>
        </>
        ) : null
      }
    </div>
  )
}
