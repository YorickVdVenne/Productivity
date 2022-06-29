import React from 'react';

export default function UpArrow({onClick}) {
    return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {onClick();}}>
            <path d="M42.8438 35.25L40.9687 37.125L30 26.0625L19.0313 37.125L17.1563 35.25L30 22.4062L42.8438 35.25Z" fill="black" fill-opacity="0.8"/>
        </svg>

    );
  }