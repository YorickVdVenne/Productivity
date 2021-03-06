
import dynamic from 'next/dynamic';
import styles from '../../styles/Employee.module.scss';

const TeamleadNavigation = dynamic(() => import('../../src/components/TeamleadNavigation'));

export default function Home() {
  return (
    <div className={styles.body}>
      <TeamleadNavigation />
      <div className={styles.main}>
        Teamlead homepage
      </div>
    </div>
  )
}
