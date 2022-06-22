import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '../../styles/Goals.module.scss';
import { db } from '../../db/db';
import GoalCard from '../../src/components/GoalCard';


const EmployeeNavigation = dynamic(() => import('../../src/components/EmployeeNavigation'));
const CreateButton = dynamic(() => import('../../src/components/CreateButton'));
const CloseButton = dynamic(() => import('../../src/components/CloseButton'));
const CreateObjectiveForm = dynamic(() => import('../../src/components/CreateObjectiveForm'));

export default function Goals() {
  const [showObjectiveModal, setShowObjectiveModal] = React.useState(false);
  const [showKeyResultModal, setShowKeyResultModal] = React.useState(false);
  const [objectives, setObjectives] = React.useState([]);

  console.log(showKeyResultModal)

  useEffect(() => {
    const getObjectives = async() => {
      const allObjectives = await db.objectives.toArray();
      setObjectives(allObjectives);
    }
    getObjectives();
  }, [])

  return (
    <div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Your goals</h1>
          <div className={styles.create}>
            <CreateButton 
              buttonTitle={'New objective'}
              onClick={() => setShowObjectiveModal(true)}
            />
          </div>
        </div>

        <hr className={styles.line}/>

        <div className={styles.content}>
          {objectives.length > 0 && 
              objectives.map(objective => {
                return <GoalCard 
                  objective={objective} 
                  showModal={setShowKeyResultModal}
                />
              })}
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
      {
        showKeyResultModal ? (
        <>
          <div className={styles.curtain} onClick={() => {setShowKeyResultModal(false)}}></div>
          <div className={styles.modal}>
            <div className={styles.close}>
              <CloseButton onClick={() => {setShowKeyResultModal(false)}} />
            </div>

            <h1 className={styles.subtitle}>Add key result</h1>

            <hr className={styles.line}/>

          </div>
        </>
        ) : null}
    </div>
  )
}
