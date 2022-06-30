import React, { useEffect } from 'react';
import ProgressBar from '../ProgressBar';
import styles from './HomeGoalCard.module.scss';
import { db } from '../../../db/db';
import Link from 'next/link';

export default function HomeGoalCard({objective}) {
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        const getKeyResults = async() => {
            const allKeyResults = await db.results
            .where({objectiveKey: objective.id})
            .toArray();
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
            <div className={styles.left}>
                <div className={styles.title}>{objective.objective}</div>
                <Link href='/employee/goals'>
                    <a className={styles.link}>Show</a>
                </Link>
            </div>
            <div className={styles.right}>
                <div className={styles.quarter}>{objective.quarter}</div>
                <ProgressBar progress={progress}/>
            </div>
        </div>
    );
}
