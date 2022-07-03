import React from 'react';
import ScoreCard from '../ScoreCard';
import styles from './ProgressCards.module.scss';

export default function ProgressCards() {

  return (
    <div className={styles.collection}>
        <div className={styles.card}>
            <div className={styles.left}>
                <span>Motivate</span>
            </div>
            <div className={styles.right}>
                <ScoreCard value={4.0}/>
                <ScoreCard value={3.5}/>
                <ScoreCard value={4.5}/>
                <ScoreCard value={'none'}/>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.left}>
                <span>Provide feedback</span>
            </div>
            <div className={styles.right}>
                <ScoreCard value={3.5}/>
                <ScoreCard value={4.0}/>
                <ScoreCard value={4.0}/>
                <ScoreCard value={'none'}/>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.left}>
                <span>Communicate in written</span>
            </div>
            <div className={styles.right}>
                <ScoreCard value={4.5}/>
                <ScoreCard value={5.0}/>
                <ScoreCard value={4.5}/>
                <ScoreCard value={'none'}/>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.left}>
                <span>Communicate verbally</span>
            </div>
            <div className={styles.right}>
                <ScoreCard value={4.0}/>
                <ScoreCard value={4.0}/>
                <ScoreCard value={4.5}/>
                <ScoreCard value={'none'}/>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.left}>
                <span>Provide structure</span>
            </div>
            <div className={styles.right}>
                <ScoreCard value={2.0}/>
                <ScoreCard value={3.0}/>
                <ScoreCard value={3.5}/>
                <ScoreCard value={'none'}/>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.left}>
                <span>Manage expectations</span>
            </div>
            <div className={styles.right}>
                <ScoreCard value={3.5}/>
                <ScoreCard value={4.0}/>
                <ScoreCard value={4.0}/>
                <ScoreCard value={'none'}/>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.left}>
                <span>Take ownership</span>
            </div>
            <div className={styles.right}>
                <ScoreCard value={3.0}/>
                <ScoreCard value={3.5}/>
                <ScoreCard value={3.5}/>
                <ScoreCard value={'none'}/>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.left}>
                <span>Prioritize effectively</span>
            </div>
            <div className={styles.right}>
                <ScoreCard value={3.0}/>
                <ScoreCard value={4.0}/>
                <ScoreCard value={3.5}/>
                <ScoreCard value={'none'}/>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.left}>
                <span>Deliver results</span>
            </div>
            <div className={styles.right}>
                <ScoreCard value={2.5}/>
                <ScoreCard value={4.0}/>
                <ScoreCard value={4.0}/>
                <ScoreCard value={'none'}/>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.left}>
                <span>Drive innovation</span>
            </div>
            <div className={styles.right}>
                <ScoreCard value={1.5}/>
                <ScoreCard value={2.5}/>
                <ScoreCard value={3.0}/>
                <ScoreCard value={'none'}/>
            </div>
        </div>
    </div>
  );
}
