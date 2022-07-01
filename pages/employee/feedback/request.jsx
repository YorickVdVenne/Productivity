
import dynamic from 'next/dynamic';
import TeammembersList from '../../../src/components/TeammembersList';
import styles from '../../../styles/Request.module.scss';

const EmployeeNavigation = dynamic(() => import('../../../src/components/EmployeeNavigation'));

export default function Request() {
  return (
    <div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Request feedback</h1>
        </div>
 
        <div className={styles.content}>
          <div className={styles.subheader}>
            <h3 className={styles.subtitle}>Teammembers</h3>
            <div className={styles.subheader_wrapper}>
              <h3 className={styles.subtitle}>0 Requests</h3>
              <span className={styles.required}>5 required*</span>
            </div>
          </div>
          <hr className={styles.line}/>
          <TeammembersList other={false}/>
          <div className={styles.subheader}>
            <h3 className={styles.subtitle}>Other potential co-workers</h3>
          </div>
          <hr className={styles.line}/>
          <TeammembersList other={true}/>
        </div>
      </div>
    </div>
  )
}
