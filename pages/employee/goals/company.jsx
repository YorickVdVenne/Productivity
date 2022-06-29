import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '../../../styles/Goals.module.scss';
import { db } from '../../../db/db';
import GoalCard from '../../../src/components/GoalCard';


const EmployeeNavigation = dynamic(() => import('../../../src/components/EmployeeNavigation'));

export default function Company() {
  const [objectives, setObjectives] = React.useState([]);
  const [objectiveId, setObjectiveId] = React.useState();

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
          <h1 className={styles.title}>Company goals</h1>
        </div>

        <hr className={styles.line}/>

        <div className={styles.content}>
          {objectives.length > 0 && 
              objectives.map(objective => {
                return <GoalCard 
                  key={objective.id}
                  objective={objective} 
                  objectiveId={setObjectiveId}
                  teamGoal={true}
                />
              })}
        </div>
      </div>
    </div>
  )
}
