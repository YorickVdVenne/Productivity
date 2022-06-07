import React from 'react';
import styles from './Arrow.module.scss';

export default function Arrow({left, dark}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 22 16"
            enableBackground="new 0 0 22 16"
            xmlSpace="preserve"
            className={`${styles.arrow} ${left ? styles['arrow--left'] : ''} ${
            dark.dark ? styles['arrow--dark'] : ''
            }`}
        >
            <g fill="none" strokeMiterlimit="10">
            <polyline points="14,2 20,8 14,14" />
            <line x1="2" y1="8" x2="20" y2="8" />
            </g>
        </svg>
    );
  }