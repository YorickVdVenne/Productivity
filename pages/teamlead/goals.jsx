
import dynamic from 'next/dynamic';
import styles from '../../styles/Employee.module.scss';

const TeamleadNavigation = dynamic(() => import('../../src/components/TeamleadNavigation'));

export default function Goals() {
  return (
    <div className={styles.body}>
      <TeamleadNavigation />
      <div className={styles.main}>
        Teamlead goalspage
      </div>
    </div>
  )
}
