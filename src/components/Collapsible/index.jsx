import styles from './Collapsible.module.scss';
import useCollapse from 'react-collapsed';
import FeedbackSkillCards from '../FeedbackSkillCards';

export default function Collapsible({showDetailModal, filled}) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className={styles.list}>
            {filled ? 
            <div className={styles.collapsible}>
                <div className={styles.header} {...getToggleProps()}>
                    <h3 className={styles.title}>Intermediary review</h3>
                    {isExpanded ? 
                        <img className={styles.profile} src='../../../assets/up-arrow.svg' />
                    : 
                        <img className={styles.profile} src='../../../assets/down-arrow.svg' />
                    }
                    
                </div>
                <div {...getCollapseProps()}>
                    <div className={styles.content}>
                        <h4 className={styles.subtitle}>Skills</h4>
                        <FeedbackSkillCards showDetail={showDetailModal}/>
                    </div>
                </div>
            </div>
            :
            <div className={styles.collapsible}>
                <div className={styles.header} {...getToggleProps()}>
                    <h3 className={styles.title}>Annual review</h3>
                    {isExpanded ? 
                        <img className={styles.profile} src='../../../assets/up-arrow.svg' />
                    : 
                        <img className={styles.profile} src='../../../assets/down-arrow.svg' />
                    }
                    
                </div>
                <div {...getCollapseProps()}>
                    <div className={styles.content}>
                        <h4 className={styles.subtitle}>Skills</h4>
                        <p>To be received...</p>
                    </div>
                </div>
            </div>
            }
        </div>    
    );
}
