import React from 'react';
import styles from './RequestFeedbackButton.module.scss';

export default function RequestFeedbackButton() {
    const [requestStatus, setRequestStatus] = React.useState(false);
    const [requestedStatus, setRequestedStatus] = React.useState(false);

  return (
    <>
        {!requestStatus && !requestedStatus ?
            <button className={styles.button} onClick={() => setRequestStatus(true)}>
                <span className={styles.text}>Request feedback</span>
            </button>
            : requestStatus && !requestedStatus ?
            <button className={styles.requested} onClick={() => {setRequestedStatus(true), setRequestStatus(false)}}>
                <img className={styles.check} src='../../../assets/loader.svg' />
                <span className={styles.requested_text}>Requested</span>
            </button>
            :
            <button className={styles.received} onClick={() => {setRequestStatus(false), setRequestedStatus(false)}}>
                <img className={styles.check} src='../../../assets/check.svg' />
                <span className={styles.received_text}>Received</span>
            </button>
        }
    </>
  );
}
