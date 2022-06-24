import React from 'react';
import styles from './EditKeyResultForm.module.scss';
import { db } from '../../../db/db';

export default function EditKeyResultForm({onSend, result}) {

    

    async function handleSubmit(e) {
        e.preventDefault();
        const change = e.target.result.value;

        try {
            db.open();
            db.results.update(result.id, {
                result: change
            });
            onSend();
        } catch (error) {
            console.warn('Something went wrong');
        }
    }

    return (
        <form autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="result">Key result<span className={styles.required}>*</span></label>
            <input className={styles.textfield} type="text" id="result" name="result" defaultValue={result.result} required />

            <div className={styles.submit}>
                <button className={styles.submit__button} type="submit">Edit key result</button>
            </div>
        </form>
    );
}
