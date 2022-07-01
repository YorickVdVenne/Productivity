import React from 'react';
import RequestFeedbackButton from '../RequestFeedbackButton';
import styles from './TeammembersList.module.scss';

export default function TeammembersList({other}) {
    
    return (
        <div className={styles.collection}>
            {!other ? 
            <>
                <div className={styles.list}>
                    <div className={styles.card}>
                        <div className={styles.left}>
                            <img className={styles.profile} src='../../../assets/mike-rek.svg' />
                            <div className={styles.text_wrapper}>
                                <p className={styles.title}>Mike Rek</p>
                                <p className={styles.role}>Backend Developer</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <RequestFeedbackButton buttonTitle={'Request feedback'} />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.left}>
                            <img className={styles.profile} src='../../../assets/john-doe.svg' />
                            <div className={styles.text_wrapper}>
                                <p className={styles.title}>Stanley Mes</p>
                                <p className={styles.role}>Backend Developer</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <RequestFeedbackButton buttonTitle={'Request feedback'} />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.left}>
                            <img className={styles.profile} src='../../../assets/karen-smit.svg' />
                            <div className={styles.text_wrapper}>
                                <p className={styles.title}>Karen Smit</p>
                                <p className={styles.role}>UX Designer</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <RequestFeedbackButton buttonTitle={'Request feedback'} />
                        </div>
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.card}>
                        <div className={styles.left}>
                            <img className={styles.profile} src='../../../assets/rob-boss.svg' />
                            <div className={styles.text_wrapper}>
                                <p className={styles.title}>Rob Boss</p>
                                <p className={styles.role}>Backend Developer</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <RequestFeedbackButton buttonTitle={'Request feedback'} />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.left}>
                            <img className={styles.profile} src='../../../assets/tina-turnster.svg' />
                            <div className={styles.text_wrapper}>
                                <p className={styles.title}>Tina Turnster</p>
                                <p className={styles.role}>Backend Developer</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <RequestFeedbackButton buttonTitle={'Request feedback'} />
                        </div>
                    </div>
                </div>
            </>
            : 
            <>
                <div className={styles.list}>
                    <div className={styles.card}>
                        <div className={styles.left}>
                            <img className={styles.profile} src='../../../assets/jeff-bazoes.svg' />
                            <div className={styles.text_wrapper}>
                                <p className={styles.title}>Jeff Bazoes</p>
                                <p className={styles.role}>Backend Developer</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <RequestFeedbackButton buttonTitle={'Request feedback'} />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.left}>
                            <img className={styles.profile} src='../../../assets/mary-jane.svg' />
                            <div className={styles.text_wrapper}>
                                <p className={styles.title}>Mary Jane</p>
                                <p className={styles.role}>Backend Developer</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <RequestFeedbackButton buttonTitle={'Request feedback'} />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.left}>
                            <img className={styles.profile} src='../../../assets/bob-den-bouwer.svg' />
                            <div className={styles.text_wrapper}>
                                <p className={styles.title}>Bob den Bouwer</p>
                                <p className={styles.role}>UX Designer</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <RequestFeedbackButton buttonTitle={'Request feedback'} />
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    );
}
