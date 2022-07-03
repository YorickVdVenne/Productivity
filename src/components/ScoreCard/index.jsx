import React from 'react';
import styles from './ScoreCard.module.scss';

export default function ScoreCard({value}) {

    const opacityValue = value === 1.5 ? '0.4' 
    : value === 1.0 ? '0.6' 
    : value === 0.5 ? '0.8' 
    : value === 3.0 ? '0.6'
    : value === 2.5 ? '0.8'
    : value === 4.5 ? '0.8'
    : value === 4.0 ? '0.6'
    : value === 3.5 ? '0.4'
    : '1'

    const showValue = value === 1.0 ? '1.0'
    : value === 2.0 ? '2.0'
    : value === 3.0 ? '3.0'
    : value === 4.0 ? '4.0'
    : value === 5.0 ? '5.0'
    : value

  return (
    <>
        {value <= 1.5 ?
            <div className={styles.card_red} style={{'--value': opacityValue}}>
                <span className={styles.score}>{showValue}</span>
            </div>
        : value <= 3.0 ?
            <div className={styles.card_orange} style={{'--value': opacityValue}}>
                <span className={styles.score}>{showValue}</span>
            </div>
        : value <= 5.0 ?
            <div className={styles.card_green} style={{'--value': opacityValue}}>
                <span className={styles.score}>{showValue}</span>
            </div>    
        :
            <div className={styles.card_none}>
                <span className={styles.score}>-</span>
            </div>   
        }     
    </>
  );
}
