import React from 'react';
import styles from './FeedbackCards.module.scss';
import RatingStars from '../RatingStars';

export default function FeedbackCards() {
  return (
    <div className={styles.wrapper}>
        <h3 className={styles.title}>Feedback</h3>
        <div className={styles.collection}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h4 className={styles.subtitle}>Mike Rek</h4>
                    <RatingStars fixed={true} value={3.0} size={'20px'}/>
                </div>
                <p className={styles.text}>
                    Focuses primarily on own strengths in order to complete tasks or projects and feel more successful on the job.
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h4 className={styles.subtitle}>Stanley Mes</h4>
                    <RatingStars fixed={true} value={4.0} size={'20px'}/>
                </div>
                <p className={styles.text}>
                    Asks one&apos;s boss for more responsibilities in order to broaden one&apos;s skill set and keep one stimulated and motivated to work
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h4 className={styles.subtitle}>Karen Smit</h4>
                    <RatingStars fixed={true} value={4.0} size={'20px'}/>
                </div>
                <p className={styles.text}>
                    Makes sure to get along with colleagues in order to enjoy being at work and boost motivation
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h4 className={styles.subtitle}>Rob Boss</h4>
                    <RatingStars fixed={true} value={3.0} size={'20px'}/>
                </div>
                <p className={styles.text}>
                    Feels overwhelmed when there is too much work to do which kills one&apos;s motivation
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h4 className={styles.subtitle}>Tina Turnster</h4>
                    <RatingStars fixed={true} value={4.5} size={'20px'}/>
                </div>
                <p className={styles.text}>
                    Takes occasional breaks between tasks or projects in order to refresh one&apos;s mind and feel motivated to work
                </p>
            </div>
        </div>
    </div>
  );
}
