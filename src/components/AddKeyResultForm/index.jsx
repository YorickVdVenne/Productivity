import React from 'react';
import styles from './AddKeyResultForm.module.scss';
import { db } from '../../../db/db';

export default function AddKeyResultForm({onSend, objectiveId}) {

    async function handleSubmit(e) {
        e.preventDefault();
        const result = e.target.result.value;
        const objectiveKey = objectiveId;
        const progress = 0;

        try {
            db.open();
            db.results.add({
                result,
                objectiveKey,
                progress
            });
            onSend();
        } catch (error) {
            console.warn('Something went wrong');
        }
    }

    return (
        <form autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="result">Key result<span className={styles.required}>*</span></label>
            <input className={styles.textfield} type="text" id="result" name="result" required />

            <div className={styles.submit}>
                <button className={styles.submit__button} type="submit">Add key result</button>
            </div>
        </form>
    );
}
