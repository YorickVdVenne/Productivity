import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../../../styles/Received.module.scss';
import Collapsible from '../../../src/components/Collapsible';
import CloseButton from '../../../src/components/CloseButton';
import AvarageScores from '../../../src/components/AvarageScores';
import FeedbackCards from '../../../src/components/FeedbackCards';

const EmployeeNavigation = dynamic(() => import('../../../src/components/EmployeeNavigation'));

export default function Reveived() {
  const [showDetailModal, setShowDetailModal] = React.useState(false);

  return (
    <div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        <div className={styles.header}>
            <h1 className={styles.title}>Received feedback</h1>
        </div>
        <hr className={styles.line}/>
        <div className={styles.content}>
          <h3 className={styles.year}>2022</h3>
          <Collapsible showDetailModal={setShowDetailModal} filled={true} />
          <Collapsible filled={false} />
        </div>
      </div>
      {
        showDetailModal ? (
          <>
            <div className={styles.curtain} onClick={() => {setShowDetailModal(false)}}/>
            <div className={styles.modal}>
                <div className={styles.close}>
                <CloseButton onClick={() => {setShowDetailModal(false)}} />
                </div>

                <h1 className={styles.subtitle}>Motivate</h1>

                <hr className={styles.line}/>
                <AvarageScores />
                <hr className={styles.line}/>
                <FeedbackCards />
            </div>
          </>
        ) : null
        }
    </div>
  )
}
