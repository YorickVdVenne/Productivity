
import dynamic from 'next/dynamic';
import styles from '../../../styles/Employee.module.scss';

const EmployeeNavigation = dynamic(() => import('../../../src/components/EmployeeNavigation'));

export default function Request() {
  return (
    <div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        Request feedback
      </div>
    </div>
  )
}
