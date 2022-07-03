
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import CreateButton from '../../src/components/CreateButton';
import CloseButton from '../../src/components/CloseButton';
import CreateObjectiveForm from '../../src/components/CreateObjectiveForm';
import styles from '../../styles/Employee.module.scss';
import HomeGoalCard from '../../src/components/HomeGoalCard';
import { db } from '../../db/db';
import HomeNotifications from '../../src/components/HomeNotifications';

const EmployeeNavigation = dynamic(() => import('../../src/components/EmployeeNavigation'));

export default function Home() {
  const [objectives, setObjectives] = React.useState([]);
  const [showObjectiveModal, setShowObjectiveModal] = React.useState(false);

  useEffect(() => {
    const getObjectives = async() => {
      const allObjectives = await db.objectives.toArray();
      setObjectives(allObjectives);
    }
    getObjectives();
  }, [showObjectiveModal])

  return (
    <div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        <div className={styles.notifications}>
          <h1 className={styles.title}>Notifications</h1>
          <HomeNotifications />
        </div>
        <div className={styles.profile}>
          <h1 className={styles.title}>Your development profile</h1>
          <img className={styles.image} src='../../../assets/development-profile.svg' />
        </div>
        <div className={styles.goals}>
          <div className={styles.header}>
            <h1 className={styles.title}>Your goals</h1>
            <div className={styles.button_wrapper}>
              <CreateButton buttonTitle={'Create new'} onClick={() => setShowObjectiveModal(true)}/>
            </div>
          </div>
          <div className={styles.collection}>
          {objectives.length > 0 && 
            objectives.map(objective => {
              return <HomeGoalCard 
                key={objective.id}
                objective={objective} 
              />
            })
          }
          </div>
        </div>
      </div>
      {
        showObjectiveModal ? (
        <>
          <div className={styles.curtain} onClick={() => {setShowObjectiveModal(false)}}></div>
          <div className={styles.modal}>
            <div className={styles.close}>
              <CloseButton onClick={() => {setShowObjectiveModal(false)}} />
            </div>

            <h1 className={styles.subtitle}>Create new Objective</h1>

            <hr className={styles.line}/>

            <CreateObjectiveForm onSend={() => {setShowObjectiveModal(false)}}/>
          </div>
        </>
        ) : null}
    </div>
  )
}
