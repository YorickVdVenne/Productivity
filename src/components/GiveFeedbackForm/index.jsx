import React from 'react';
import styles from './GiveFeedbackForm.module.scss';
import RatingStars from '../RatingStars';
import CreateButton from '../CreateButton';

export default function GiveFeedbackForm({onSend}) {

    return (
        <div className={styles.form}>
            <div className={styles.left}>
                <div className={styles.feedback}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Motivate</h3>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                <RatingStars />
                            </div>
                        </div>
                    </div>
                    <textarea className={styles.textarea} rows='4' placeholder='Textual feedback...'/>
                </div>
                <div className={styles.feedback}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Motivate</h3>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                <RatingStars />
                            </div>
                        </div>
                    </div>
                    <textarea className={styles.textarea} rows='4' placeholder='Textual feedback...'/>
                </div>
                <div className={styles.feedback}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Motivate</h3>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                <RatingStars />
                            </div>
                        </div>
                    </div>
                    <textarea className={styles.textarea} rows='4' placeholder='Textual feedback...'/>
                </div>
                <div className={styles.feedback}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Motivate</h3>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                <RatingStars />
                            </div>
                        </div>
                    </div>
                    <textarea className={styles.textarea} rows='4' placeholder='Textual feedback...'/>
                </div>
                <div className={styles.feedback}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Motivate</h3>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                <RatingStars />
                            </div>
                        </div>
                    </div>
                    <textarea className={styles.textarea} rows='4' placeholder='Textual feedback...'/>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.feedback}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Motivate</h3>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                <RatingStars />
                            </div>
                        </div>
                    </div>
                    <textarea className={styles.textarea} rows='4' placeholder='Textual feedback...'/>
                </div>
                <div className={styles.feedback}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Motivate</h3>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                <RatingStars />
                            </div>
                        </div>
                    </div>
                    <textarea className={styles.textarea} rows='4' placeholder='Textual feedback...'/>
                </div>
                <div className={styles.feedback}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Motivate</h3>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                <RatingStars />
                            </div>
                        </div>
                    </div>
                    <textarea className={styles.textarea} rows='4' placeholder='Textual feedback...'/>
                </div>
                <div className={styles.feedback}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Motivate</h3>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                <RatingStars />
                            </div>
                        </div>
                    </div>
                    <textarea className={styles.textarea} rows='4' placeholder='Textual feedback...'/>
                </div>
                <div className={styles.feedback}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Motivate</h3>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                <RatingStars />
                            </div>
                        </div>
                    </div>
                    <textarea className={styles.textarea} rows='4' placeholder='Textual feedback...'/>
                </div>
            </div>
            <div className={styles.button}>
                <CreateButton buttonTitle={'Send feedback'} onClick={() => onSend(true)}/>
            </div>
        </div>
    );
}
