import React from 'react';
import Arrow from '../Arrow';
import UpArrow from '../UpArrow';
import styles from './ContributorsCard.module.scss';

export default function ContributorsCard({contributor}) {
    const [showActivities, setShowActivities] = React.useState(false);

    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card}>
                <img  className={styles.profile} src={`../../../assets/${contributor.pic}`} />
                <div className={styles.text_wrapper}>
                    <p className={styles.title}>{contributor.name}</p>
                    <p className={styles.role}>{contributor.role}</p>
                </div>
                {!showActivities ? 
                    <div className={styles.activities_button} onClick={() => setShowActivities(true)}>
                        See activities <div className={styles.arrow}><Arrow dark={true}/></div>
                    </div> : 
                    <div>
                        <UpArrow onClick={() => setShowActivities(false)}/>
                    </div>
                } 
            </div>
            {showActivities && 
                <>
                    {contributor.activities.length > 0 && 
                        contributor.activities.map(activity => {
                            return <div key={activity.activity} className={styles.activities}>
                                <div className={styles.activity_title}>
                                    {activity.activity}
                                </div>
                                <div className={styles.time}>
                                    {contributor.times[0].time}
                                </div>
                            </div>
                        })
                    }
                </>
            }
        </div>
    );
}
