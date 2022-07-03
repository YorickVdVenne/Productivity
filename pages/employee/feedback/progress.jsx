
import dynamic from 'next/dynamic';
import ProgressCards from '../../../src/components/ProgressCards';
import styles from '../../../styles/Progress.module.scss';

const EmployeeNavigation = dynamic(() => import('../../../src/components/EmployeeNavigation'));

export default function Progress() {
  return (
    <div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        <div className={styles.header}>
            <h1 className={styles.title}>Received feedback</h1>
        </div>
        <hr className={styles.line}/>
        <div className={styles.content}>
          <div className={styles.head}>
            <h3 className={styles.subtitle}>Skills</h3>
            <div className={styles.right}>
              <h3 className={styles.year}>2021</h3>
              <h3 className={styles.subtitle}>2022</h3>
            </div>
          </div>
          <div className={styles.months}>
            <span className={styles.month}>Apr</span>
            <span className={styles.month}>Oct</span>
            <span className={styles.month}>Apr</span>
            <span className={styles.month}>Oct</span>
          </div>
          <ProgressCards />
        </div>
      </div>
    </div>
  )
}
