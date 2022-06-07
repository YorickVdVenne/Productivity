import React from 'react';
import Link from 'next/link';
import styles from './PrimaryButton.module.scss';
import dynamic from 'next/dynamic';

const Arrow = dynamic(() => import('../Arrow'));

export default function PrimaryButton({buttonTitle, buttonLink}) {
  return (
    <>
      <Link href={buttonLink}>
          <a className={styles.button}>
            {buttonTitle}
            {/* <Arrow dark={false} left={false}/> */}
          </a>
      </Link>
    </>
  );
}
