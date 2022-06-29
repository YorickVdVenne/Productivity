import React, { useEffect } from 'react';
import ProgressBar from '../ProgressBar';
import SecondaryCreateButton from '../SecondaryCreateButton';
import styles from './GoalCard.module.scss';
import { db } from '../../../db/db';
import { teamKeyResults } from '../../../db/data';
import { companyKeyResults } from '../../../db/data';
import KeyResultCard from '../KeyResultCard';

export default function GoalCard({objective, showModal, objectiveId, teamGoal, companyGoal}) {
    const [keyResults, setKeyResults] = React.useState([]);
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        if(teamGoal) {
            const allTeamKeyResults = teamKeyResults.filter(result => result.objectiveKey === objective.id)
            setKeyResults(allTeamKeyResults)
            calculateProgressValue(allTeamKeyResults);
        } else if(companyGoal){
            const allCompanyKeyResults = companyKeyResults.filter(result => result.objectiveKey === objective.id)
            setKeyResults(allCompanyKeyResults)
            calculateProgressValue(allCompanyKeyResults);
        } else {
            const getKeyResults = async() => {
                const allKeyResults = await db.results
                .where({objectiveKey: objective.id})
                .toArray();
                setKeyResults(allKeyResults);
                calculateProgressValue(allKeyResults);
            }
            getKeyResults();
        }
    }, [])

    function calculateProgressValue(results) {
        if(results.length > 0) {
            const maxProgress = results.length * 100;
            const totalProgress = results.reduce((previous, current) => {
                return previous + parseInt(current.progress)
            }, 0)

            setProgress(Math.round((totalProgress / maxProgress) * 100))
        }
    }

    async function addCompleteObjective() {
        const title = objective.objective;
        const q = objective.quarter;
        const objectiveKey = objective.id;

        try {
            db.open();
            db.completed.add({
                title,
                q,
                objectiveKey
            });
        deleteObjective();
        } catch (error) {
            console.warn('Something went wrong');
        }
    }

    function deleteObjective() {
        db.objectives.where({id: objective.id}).delete();
    }

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{objective?.objective}</h3>
                {teamGoal ? '' : companyGoal ? '' : 
                    <div className={styles.add}>
                        <SecondaryCreateButton 
                            buttonTitle={'Add key result'}
                            onClick={() => {showModal(true), objectiveId(objective.id)}}
                        />
                    </div>
                }
            </div>
            <div className={styles.progress}>
                <ProgressBar progress={progress}/>
                <span className={styles.quarter}>{objective?.quarter}</span>
                {progress >= 100 ?
                    <div className={styles.completed_wrapper}>
                        <button className={styles.complete} onClick={addCompleteObjective}>Complete Objective</button>
                    </div> 
                :''}
            </div>
            <div className={styles.results}>
                {keyResults.length > 0 && 
                    keyResults.map(result => {
                        return <KeyResultCard key={result.id} result={result} teamGoal={teamGoal} companyGoal={companyGoal}/>
                    })
                }
            </div>
        </div>
    );
}
