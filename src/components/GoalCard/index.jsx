import React, { useEffect } from 'react';
import ProgressBar from '../ProgressBar';
import SecondaryCreateButton from '../SecondaryCreateButton';
import styles from './GoalCard.module.scss';
import { db } from '../../../db/db';
import KeyResultCard from '../KeyResultCard';

export default function GoalCard({objective, showModal, objectiveId}) {
    const [keyResults, setKeyResults] = React.useState([]);
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        const getKeyResults = async() => {
            const allKeyResults = await db.results
            .where({objectiveKey: objective.id})
            .toArray();
            setKeyResults(allKeyResults);
            calculateProgressValue(allKeyResults);
        }
        getKeyResults();
        
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

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{objective?.objective}</h3>
                <div className={styles.add}>
                    <SecondaryCreateButton 
                        buttonTitle={'Add key result'}
                        onClick={() => {showModal(true), objectiveId(objective.id)}}
                    />
                </div>
            </div>
            <div className={styles.progress}>
                <ProgressBar progress={progress}/>
                <span className={styles.quarter}>{objective?.quarter}</span>
            </div>
            <div className={styles.results}>
                {keyResults.length > 0 && 
                    keyResults.map(result => {
                        return <KeyResultCard key={result.id} result={result}/>
                    })
                }
            </div>
        </div>
    );
}
