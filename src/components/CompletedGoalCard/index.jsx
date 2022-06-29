import React, { useEffect } from 'react';
import styles from './CompletedGoalCard.module.scss';
import { db } from '../../../db/db';
import CompletedKeyResultCard from '../CompletedKeyResultCard';

export default function CompletedGoalCard({objective}) {
    const [keyResults, setKeyResults] = React.useState([]);

    useEffect(() => {
        const getKeyResults = async() => {
            const allKeyResults = await db.results
            .where({objectiveKey: objective.id})
            .toArray();
            setKeyResults(allKeyResults);
        }
        getKeyResults();
    }, [])

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{objective?.title}</h3>
                <span className={styles.quarter}>{objective?.q}</span>
            </div>
            <div className={styles.results}>
                {keyResults.length > 0 && 
                    keyResults.map(result => {
                        return <CompletedKeyResultCard key={result.id} result={result}/>
                    })
                }
            </div>
        </div>
    );
}