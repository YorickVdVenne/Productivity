
import dynamic from 'next/dynamic';
import FeedbackTimeline from '../../src/components/FeedbackTimeline';
import GiveFeedbackSection from '../../src/components/GiveFeedbackSection';
import RequestFeedbackSection from '../../src/components/RequestFeedbackSection';
import styles from '../../styles/Feedback.module.scss';

const EmployeeNavigation = dynamic(() => import('../../src/components/EmployeeNavigation'));

export default function Feedback() {
  return (
<div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        <FeedbackTimeline />
        <div className={styles.header}>
          <h1 className={styles.title}>Feedback cycle</h1>
        </div>
 
        <hr className={styles.line}/>

        <div className={styles.content}>
          <h3 className={styles.subtitle}>Request feedback</h3>
          <RequestFeedbackSection />
          <hr className={styles.line}/>
          <h3 className={styles.subtitle}>Give feedback</h3>
          <GiveFeedbackSection />
        </div>
      </div>
    </div>
  )
}
