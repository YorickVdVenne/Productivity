import RatingStars from '../RatingStars';
import styles from './FeedbackSkillCards.module.scss';
import Arrow from '../Arrow';

export default function FeedbackSkillCards({showDetail}) {

    return (    
        <div className={styles.collection}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <p className={styles.text}>Motivate</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.score}>4.0</p>
                    <div className={styles.stars}>
                        <RatingStars fixed={true} value={4.0} size={'30px'}/>
                    </div>
                    <div className={styles.show} onClick={() => showDetail(true)}>
                        <span className={styles.show_text}>Show</span>
                        <Arrow blue={true}/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <p className={styles.text}>Provide feedback</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.score}>4.5</p>
                    <div className={styles.stars}>
                        <RatingStars fixed={true} value={4.5} size={'30px'}/>
                    </div>
                    <div className={styles.show} onClick={() => showDetail(true)}>
                        <span className={styles.show_text}>Show</span>
                        <Arrow blue={true}/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <p className={styles.text}>Communicate in written</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.score}>4.5</p>
                    <div className={styles.stars}>
                        <RatingStars fixed={true} value={4.5} size={'30px'}/>
                    </div>
                    <div className={styles.show} onClick={() => showDetail(true)}>
                        <span className={styles.show_text}>Show</span>
                        <Arrow blue={true}/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <p className={styles.text}>Communicate verbally</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.score}>4.5</p>
                    <div className={styles.stars}>
                        <RatingStars fixed={true} value={4.5} size={'30px'}/>
                    </div>
                    <div className={styles.show} onClick={() => showDetail(true)}>
                        <span className={styles.show_text}>Show</span>
                        <Arrow blue={true}/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <p className={styles.text}>Provide structure</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.score}>3.0</p>
                    <div className={styles.stars}>
                        <RatingStars fixed={true} value={3.0} size={'30px'}/>
                    </div>
                    <div className={styles.show} onClick={() => showDetail(true)}>
                        <span className={styles.show_text}>Show</span>
                        <Arrow blue={true}/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <p className={styles.text}>Manage expectations</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.score}>4.0</p>
                    <div className={styles.stars}>
                        <RatingStars fixed={true} value={4.0} size={'30px'}/>
                    </div>
                    <div className={styles.show} onClick={() => showDetail(true)}>
                        <span className={styles.show_text}>Show</span>
                        <Arrow blue={true}/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <p className={styles.text}>Take ownership</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.score}>3.5</p>
                    <div className={styles.stars}>
                        <RatingStars fixed={true} value={3.5} size={'30px'}/>
                    </div>
                    <div className={styles.show} onClick={() => showDetail(true)}>
                        <span className={styles.show_text}>Show</span>
                        <Arrow blue={true}/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <p className={styles.text}>Prioritize effectively</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.score}>2.5</p>
                    <div className={styles.stars}>
                        <RatingStars fixed={true} value={2.5} size={'30px'}/>
                    </div>
                    <div className={styles.show} onClick={() => showDetail(true)}>
                        <span className={styles.show_text}>Show</span>
                        <Arrow blue={true}/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <p className={styles.text}>Deliver results</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.score}>4.0</p>
                    <div className={styles.stars}>
                        <RatingStars fixed={true} value={4.0} size={'30px'}/>
                    </div>
                    <div className={styles.show} onClick={() => showDetail(true)}>
                        <span className={styles.show_text}>Show</span>
                        <Arrow blue={true}/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <p className={styles.text}>Drive innovation</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.score}>3.0</p>
                    <div className={styles.stars}>
                        <RatingStars fixed={true} value={3.0} size={'30px'}/>
                    </div>
                    <div className={styles.show} onClick={() => showDetail(true)}>
                        <span className={styles.show_text}>Show</span>
                        <Arrow blue={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
