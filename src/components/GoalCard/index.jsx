import React, { useEffect } from 'react';
import ProgressBar from '../ProgressBar';
import SecondaryCreateButton from '../SecondaryCreateButton';
import styles from './GoalCard.module.scss';
import { db } from '../../../db/db';
import { teamKeyResults } from '../../../db/data';
import { companyKeyResults } from '../../../db/data';
import KeyResultCard from '../KeyResultCard';
import DeleteButton from '../DeleteButton';

export default function GoalCard({objective, showModal, objectiveId, teamGoal, companyGoal}) {
    const [keyResults, setKeyResults] = React.useState([]);
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        if(teamGoal) {
            const getAllTeamKeyResults = async() => {
                const allTeamKeyResults = await teamKeyResults.filter(result => result.objectiveKey === objective.id);
                setKeyResults(allTeamKeyResults);
                calculateProgressValue(allTeamKeyResults);
            }
            getAllTeamKeyResults();
        } else if(companyGoal){
            const getAllCompanyKeyResults = async() => {
                const allCompanyKeyResults = await companyKeyResults.filter(result => result.objectiveKey === objective.id)
                setKeyResults(allCompanyKeyResults);
                calculateProgressValue(allCompanyKeyResults);
            }
            getAllCompanyKeyResults();
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
    }, [keyResults])

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

    async function deleteObjective() {
        try {
            db.open();
            db.objectives.where({id: objective.id}).delete();
        } catch (error) {
            console.warn('Something went wrong');
        }        
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
                {keyResults.length > 0 ? 
                    keyResults.map(result => {
                        return <KeyResultCard key={result.id} result={result} teamGoal={teamGoal} companyGoal={companyGoal}/>
                    }) :
                    <div onClick={() => deleteObjective()} className={styles.delete}>
                        <DeleteButton onClick={() => deleteObjective()}/>
                        <span className={styles.delete_text}>Delete this objective</span>
                    </div>
                }
            </div>
        </div>
    );
}
