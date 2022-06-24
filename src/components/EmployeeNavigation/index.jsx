import React, { useEffect } from 'react';
import styles from './Navigation.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const Arrow = dynamic(() => import('../../../src/components/Arrow'));

export default function EmployeeNavigation() {
    const router = useRouter();
    const [activeLink, setActiveLink] = React.useState('');

    useEffect(() => {
        setActiveLink(router.route);
      }, [router]);

    return (
    <>
        <div className={styles.sidebar}>
            <Link href='/'>
                <img className={styles.logo} src="../../assets/iO-logo-transparent.svg"/>
            </Link>
            <div className={styles.nav}>
                <div className={`${styles.items} ${activeLink === '/employee/home' ? styles.active : ''}`}>
                    <Link href='/employee/home'>
                        <a className={`${styles.links} ${activeLink === '/employee/home' ? styles.active : ''}`} onClick={() => setActiveLink('')}>
                            <img className={styles.icons} src="../../assets/home-icon.svg"/>
                            <span className={styles.iconText}>Home</span>
                        </a>
                    </Link>
                </div>
                <div className={`${styles.items} ${activeLink === '/employee/goals' || activeLink === '/employee/goals/team' || activeLink === '/employee/goals/company' ? styles.active : ''}`}>
                    <Link href='/employee/goals'>
                        <a className={`${styles.links} ${activeLink === '/employee/goals' || activeLink === '/employee/goals/team' || activeLink === '/employee/goals/company' ? styles.active : ''}`} onClick={e => setActiveLink('goals')}>
                            <img className={styles.icons} src="../../assets/goals-icon.svg"/>
                            <span className={styles.iconText}>Goals</span>
                        </a>
                    </Link>
                    {activeLink === '/employee/goals' || activeLink === '/employee/goals/team' || activeLink === '/employee/goals/company' || activeLink === '/employee/goals/completed' ? <div className={styles.sublinks}>
                        <Link href='/employee/goals'>
                            <a className={`${styles.item} ${activeLink === '/employee/goals' ? styles.active : ''}`}>
                                <span>Your goals</span>
                                {activeLink === '/employee/goals' && <div className={styles.arrow}><Arrow /></div>}
                            </a>
                        </Link>
                        <Link href='/employee/goals/team'>
                            <a className={`${styles.item} ${activeLink === '/employee/goals/team' ? styles.active : ''}`}>
                                <span>Your team</span>
                                {activeLink === '/employee/goals/team' && <div className={styles.arrow}><Arrow /></div>}
                            </a>
                        </Link>
                        <Link href='/employee/goals/company'>
                            <a className={`${styles.item} ${activeLink === '/employee/goals/company' ? styles.active : ''}`}>
                                <span>Company</span>
                                {activeLink === '/employee/goals/company' && <div className={styles.arrow}><Arrow /></div>}
                            </a>
                        </Link>
                        <Link href='/employee/goals/completed'>
                            <a className={`${styles.item} ${activeLink === '/employee/goals/completed' ? styles.active : ''}`}>
                                <span>Completed</span>
                                {activeLink === '/employee/goals/completed' && <div className={styles.arrow}><Arrow /></div>}
                            </a>
                        </Link>
                    </div> : ''}
                </div>
                <div className={`${styles.items} ${activeLink === '/employee/feedback' || activeLink === '/employee/feedback/stored' || activeLink === '/employee/feedback/progress' ? styles.active : ''}`}>
                    <Link href='/employee/feedback'>
                        <a className={`${styles.links} ${activeLink === '/employee/feedback' ? styles.active : ''}`} onClick={() => setActiveLink('feedback')}>

                            <img className={styles.icons} src="../../assets/feedback-icon.svg"/>
                            <span className={styles.iconText}>Feedback</span>
                        </a>
                    </Link>
                    {activeLink === '/employee/feedback' || activeLink === '/employee/feedback/stored' || activeLink === '/employee/feedback/progress' ? <div className={styles.sublinks}>
                        <Link href='/employee/feedback'>
                            <a className={`${styles.item} ${activeLink === '/employee/feedback' ? styles.active : ''}`}>
                                <span>Overview</span>
                                {activeLink === '/employee/feedback' && <div className={styles.arrow}><Arrow /></div>}
                            </a>
                        </Link>
                        <Link href='/employee/feedback/stored'>
                            <a className={`${styles.item} ${activeLink === '/employee/feedback/stored' ? styles.active : ''}`}>
                                <span>Feedback</span>
                                {activeLink === '/employee/feedback/stored' && <div className={styles.arrow}><Arrow /></div>}
                            </a>
                        </Link>
                        <Link href='/employee/feedback/progress'>
                            <a className={`${styles.item} ${activeLink === '/employee/feedback/progress' ? styles.active : ''}`}>
                                <span>Progress</span>
                                {activeLink === '/employee/feedback/progress' && <div className={styles.arrow}><Arrow /></div>}
                            </a>
                        </Link>
                    </div> : ''}
                </div>
            </div>
        </div>
    </>  
    );
  }