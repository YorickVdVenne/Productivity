import React, {useEffect} from 'react';
import DeleteButton from '../DeleteButton';
import DraggableProgressBar from '../DraggableProgressBar';
import EditButton from '../EditButton';
import styles from './KeyResultCard.module.scss';
import { db } from '../../../db/db';
import { contributors } from '../../../db/data';
import CloseButton from '../CloseButton';
import EditKeyResultForm from '../EditKeyResultForm';
import ContributorsButton from '../ContributorsButton';
import ContributorsCard from '../ContributorsCard';


export default function KeyResultCard({result, teamGoal, companyGoal}) {
    const [progressValue, setProgressValue] = React.useState(result.progress);
    const [showEditModal, setShowEditModal] = React.useState(false);
    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
    const [showContributorsModal, setShowContributorsModal] = React.useState(false);

    useEffect(() => {
        try {
            db.open();
            db.results.update(result.id, {
                progress: progressValue
            });
        } catch (error) {
            console.warn(error);
        }
    }, [progressValue])
    
    const deleteKeyResult = async() => {
        db.results.where({id: result.id}).delete()
    }

    return (
        <div className={styles.card}>
            <p className={styles.title}>{result.result}</p>
            <div className={styles.wrapper}>
                {!companyGoal && <DraggableProgressBar result={result} progressValue={setProgressValue}/>}
                <p className={styles.percentage}>{progressValue ? `${progressValue}%` : "0%"}</p>
                {teamGoal || companyGoal ? 
                <div className={styles.contributors}>
                    <ContributorsButton onClick={() => {setShowContributorsModal(true)} }/>
                </div>
                : 
                <>
                    <div className={styles.edit}>
                        <EditButton onClick={() => {setShowEditModal(true)}}/>
                    </div>
                    <div className={styles.delete}>
                        <DeleteButton onClick={() => {setShowDeleteModal(true)}}/>
                    </div>
                </>
                }
            </div>
            {
                showEditModal ? (
                    <>
                    <div className={styles.curtain} onClick={() => {setShowEditModal(false)}}/>
                    <div className={styles.modal}>
                        <div className={styles.close}>
                        <CloseButton onClick={() => {setShowEditModal(false)}} />
                        </div>

                        <h1 className={styles.subtitle}>Edit key result</h1>

                        <hr className={styles.line}/>

                        <EditKeyResultForm result={result} onSend={() => {setShowEditModal(false)}}/>
                    </div>
                    </>
                ) : null
            }
            {
                showDeleteModal ? (
                    <>
                    <div className={styles.curtain} onClick={() => {setShowDeleteModal(false)}}/>
                    <div className={styles.modal}>
                        <div className={styles.close}>
                        <CloseButton onClick={() => {setShowDeleteModal(false)}} />
                        </div>

                        <p>Are you sure you want to delete this key result?</p>
                        <div>
                            <button className={styles.yes} onClick={() => deleteKeyResult()}>Yes</button>
                            <button className={styles.no} onClick={() => setShowDeleteModal(false)}>No</button>
                        </div>
                    </div>
                    </>
                ) : null
            }
            {
                showContributorsModal ? (
                    <>
                    <div className={styles.curtain} onClick={() => {setShowContributorsModal(false)}}/>
                    <div className={styles.modal}>
                        <div className={styles.close}>
                        <CloseButton onClick={() => {setShowContributorsModal(false)}} />
                        </div>

                        <h1 className={styles.subtitle}>Contributors</h1>

                        <hr className={styles.line}/>

                        <div className={styles.contributors}>
                            {contributors.length > 0 && 
                                contributors.map(contributor => {
                                    return <ContributorsCard key={contributor.name} contributor={contributor} />
                                })
                            }
                        </div>
                    </div>
                    </>
                ) : null
            }
        </div>
    );
}
