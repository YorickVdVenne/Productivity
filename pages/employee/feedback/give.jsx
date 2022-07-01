
import dynamic from 'next/dynamic';
import BackToOverviewButton from '../../../src/components/BackToOverviewButton';
import styles from '../../../styles/Give.module.scss';

const EmployeeNavigation = dynamic(() => import('../../../src/components/EmployeeNavigation'));

export default function Give() {
  return (
    <div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        <div className={styles.header}>
            <BackToOverviewButton />
            <h1 className={styles.title}>Give feedback</h1>
        </div>
        <hr className={styles.line}/>
        <div className={styles.content}>
          
        </div>
      </div>
    </div>
  )
}
