import React, {useEffect} from 'react';
import DeleteButton from '../DeleteButton';
import DraggableProgressBar from '../DraggableProgressBar';
import EditButton from '../EditButton';
import styles from './KeyResultCard.module.scss';
import { db } from '../../../db/db';
import CloseButton from '../CloseButton';
import EditKeyResultForm from '../EditKeyResultForm';


export default function KeyResultCard({result}) {
    const [progressValue, setProgressValue] = React.useState(result.progress);
    const [showEditModal, setShowEditModal] = React.useState(false);

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
            <span className={styles.blue} />
            <p className={styles.title}>{result.result}</p>
            <DraggableProgressBar result={result} progressValue={setProgressValue}/>
            <p className={styles.percentage}>{progressValue ? `${progressValue}%` : "0%"}</p>
            <EditButton onClick={() => {setShowEditModal(true)}}/>
            <DeleteButton onClick={deleteKeyResult}/>
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
        </div>
    );
}
