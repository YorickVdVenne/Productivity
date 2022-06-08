
import dynamic from 'next/dynamic';
import styles from '../../styles/Employee.module.scss';

const EmployeeNavigation = dynamic(() => import('../../src/components/EmployeeNavigation'));

export default function Home() {
  return (
    <div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        <div className={styles.notifications}>
          <h1 className={styles.title}>Notifications</h1>
        </div>
        <div className={styles.profile}>
         <h1 className={styles.title}>Your development profile</h1>
        </div>
        <div className={styles.goals}>
          <h1 className={styles.title}>Your goals</h1>
        </div>
      </div>
    </div>
  )
}
