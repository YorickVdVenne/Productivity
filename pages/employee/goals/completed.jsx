import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '../../../styles/Goals.module.scss';
import { db } from '../../../db/db';
import CompletedGoalCard from '../../../src/components/CompletedGoalCard';

const EmployeeNavigation = dynamic(() => import('../../../src/components/EmployeeNavigation'));

export default function Completed() {
  const [objectives, setObjectives] = React.useState([]);

  useEffect(() => {
    const getObjectives = async() => {
      const allObjectives = await db.completed.toArray();
      setObjectives(allObjectives);
    }
    getObjectives();
  }, [])

  return (
    <div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Completed goals</h1>
        </div>

        <hr className={styles.line}/>

        <div className={styles.content}>
          {objectives.length > 0 && 
              objectives.map(objective => {
                return <CompletedGoalCard 
                  key={objective.id}
                  objective={objective} 
                />
              })}
        </div>
      </div>
    </div>
  )
}
