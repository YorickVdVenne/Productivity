import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '../../../styles/Goals.module.scss';
import { teamObjectives } from '../../../db/data';
import GoalCard from '../../../src/components/GoalCard';
import RecentActivitiesCard from '../../../src/components/RecentActivitiesCard';


const EmployeeNavigation = dynamic(() => import('../../../src/components/EmployeeNavigation'));

export default function Team() {
  const [objectives, setObjectives] = React.useState(teamObjectives);
  const [objectiveId, setObjectiveId] = React.useState();

  return (
    <div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Your Team</h1>
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
                companyGoal={false}
              />
            }
          )}
          <hr className={styles.line}/>
          <h1 className={styles.second_title}>Recent activities</h1>
          <RecentActivitiesCard />
        </div>
      </div>
    </div>
  )
}
