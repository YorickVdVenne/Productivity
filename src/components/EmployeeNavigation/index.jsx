import React, { useEffect } from 'react';
import styles from './Navigation.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
                <Link href='/employee/home'>
                    <a className={`${styles.links} ${activeLink === '/employee/home' ? styles.active : ''}`} onClick={e => setActiveLink('')}>
                        <img className={styles.icons} src="../../assets/home-icon.svg"/>
                        <span>Home</span>
                    </a>
                </Link>
                <Link href='/employee/goals'>
                    <a className={`${styles.links} ${activeLink === '/employee/goals' || activeLink === '/employee/goals/team' || activeLink === '/employee/goals/company' ? styles.active : ''}`} onClick={e => setActiveLink('goals')}>
                        <img className={styles.icons} src="../../assets/goals-icon.svg"/>
                        <span>Goals</span>
                    </a>
                </Link>
                <Link href='/employee/feedback'>
                    <a className={`${styles.links} ${activeLink === '/employee/feedback' || activeLink === '/employee/feedback/stored' || activeLink === '/employee/feedback/progress' ? styles.active : ''}`} onClick={e => setActiveLink('feedback')}>
                        <img className={styles.icons} src="../../assets/feedback-icon.svg"/>
                        <span>Feedback</span>
                    </a>
                </Link>
            </div>
            <div className={styles.subnav}>
                <div className={styles.items}>
                    {activeLink === '/employee/goals' || activeLink === '/employee/goals/team' || activeLink === '/employee/goals/company' ? (
                    <>
                        <Link href='/employee/goals'>
                            <a className={`${styles.item} ${activeLink === '/employee/goals' ? styles.active : ''}`}>
                                <span>Your goals</span>
                            </a>
                        </Link>
                        <Link href='/employee/goals/team'>
                            <a className={`${styles.item} ${activeLink === '/employee/goals/team' ? styles.active : ''}`}>
                                <span>Your team</span>
                            </a>
                        </Link>
                        <Link href='/employee/goals/company'>
                            <a className={`${styles.item} ${activeLink === '/employee/goals/company' ? styles.active : ''}`}>
                                <span>Company</span>
                            </a>
                        </Link>
                    </>
                    ) : activeLink === '/employee/feedback' || activeLink === '/employee/feedback/stored' || activeLink === '/employee/feedback/progress' ? (
                    <>
                        <Link href='/employee/feedback'>
                            <a className={`${styles.item} ${activeLink === '/employee/feedback' ? styles.active : ''}`}>
                                <span>Overview</span>
                            </a>
                        </Link>
                        <Link href='/employee/feedback/stored'>
                            <a className={`${styles.item} ${activeLink === '/employee/feedback/stored' ? styles.active : ''}`}>
                                <span>Feedback</span>
                            </a>
                        </Link>
                        <Link href='/employee/feedback/progress'>
                            <a className={`${styles.item} ${activeLink === '/employee/feedback/progress' ? styles.active : ''}`}>
                                <span>Progress</span>
                            </a>
                        </Link>
                    </>
                    ) : ''}
                    
                </div>
            </div>
        </div>
    </>  
    );
  }