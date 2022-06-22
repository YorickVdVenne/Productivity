import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../../styles/Goals.module.scss';


const EmployeeNavigation = dynamic(() => import('../../src/components/EmployeeNavigation'));
const CreateButton = dynamic(() => import('../../src/components/CreateButton'));
const CloseButton = dynamic(() => import('../../src/components/CloseButton'));
const CreateObjectiveForm = dynamic(() => import('../../src/components/CreateObjectiveForm'));

export default function Goals() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className={styles.body}>
      <EmployeeNavigation />
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1 className={styles.title}>Your goals</h1>
            <div className={styles.create}>
              <CreateButton 
                buttonTitle={'New objective'}
                onClick={() => {setShowModal(true)}}
              />
            </div>
          </div>

          <hr className={styles.line}/>

          <div className={styles.content}>
            My content
          </div>
        </div>
      </div>
      {
        showModal ? (
        <>
          <div className={styles.curtain} onClick={() => {setShowModal(false)}}></div>
          <div className={styles.modal}>
            <div className={styles.close}>
              <CloseButton onClick={() => {setShowModal(false)}} />
            </div>

            <h1 className={styles.subtitle}>Create new Objective</h1>

            <hr className={styles.line}/>

            <CreateObjectiveForm />
          </div>
        </>
        ) : null}
    </div>
  )
}
