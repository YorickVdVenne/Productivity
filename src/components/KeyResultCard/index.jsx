import React, {useEffect} from 'react';
import DeleteButton from '../DeleteButton';
import DraggableProgressBar from '../DraggableProgressBar';
import EditButton from '../EditButton';
import styles from './KeyResultCard.module.scss';
import { db } from '../../../db/db';
import CloseButton from '../CloseButton';
import EditKeyResultForm from '../EditKeyResultForm';


export default function KeyResultCard({result, progress}) {
    const [progressValue, setProgressValue] = React.useState();
    const [showEditModal, setShowEditModal] = React.useState(false);

    useEffect(() => {
        progress(progressValue);
    }, [progressValue])
    
    const deleteKeyResult = async() => {
        db.results.where({id: result.id}).delete()
        console.log('deleted!');
    }

    return (
        <div className={styles.card}>
            <span className={styles.blue} />
            <p className={styles.title}>{result.result}</p>
            <DraggableProgressBar progressValue={setProgressValue}/>
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
