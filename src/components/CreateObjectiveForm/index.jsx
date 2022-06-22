import React from 'react';
import styles from './CreateObjectiveForm.module.scss';
import dynamic from 'next/dynamic';

const CreateButton = dynamic(() => import('../../../src/components/CreateButton'));

export default function CreateObjectiveForm() {

    function handleSubmit(e) {
        e.preventDefault();
        const objective = e.target.objective.value;
        const quarter = e. target.radio.value;
        
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="objective">Objective<span className={styles.required}>*</span></label>
            <input className={styles.textfield} type="text" id="objective" name="objective" required />

            <p className={styles.label}>Target date<span className={styles.required}>*</span></p>

            <div className={styles.date}>
                <label>
                    <input type="radio" name="radio" value="Q3-2022"/>
                    <div className={styles.box}>
                        <span className={styles.boxtext}>Q3-2022</span>
                    </div>
                </label>

                <label>
                    <input type="radio" name="radio" value="Q4-2022"/>
                    <div className={styles.box}>
                        <span className={styles.boxtext}>Q4-2022</span>
                    </div>
                </label>
            </div>
            <div className={styles.submit}>
                <button className={styles.submit__button} type="submit">Create objective</button>
            </div>
        </form>
    );
}
