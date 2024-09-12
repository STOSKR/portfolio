import React, { useState, useRef } from 'react';
import './DownloadButton.scss';

const DownloadButton = () => {
    const [isActive, setIsActive] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const buttonRef = useRef(null);

    const duration = parseInt(getComputedStyle(buttonRef.current).getPropertyValue('--duration'), 10);

    const handleClick = () => {
        if (!isActive && !isDone) {
            setIsActive(true);
            setTimeout(() => {
                setIsDone(true);
            }, duration);
        }
        if (isDone) {
            setIsDone(false);
            setIsActive(true);
            setTimeout(() => {
                setIsDone(true);
                setIsActive(false);
            }, duration);
        }

    };

    return (
        <div
            className={`dl-button ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
            ref={buttonRef}
            onClick={handleClick}
        >
            <div >
                <div className="icon">
                    <div>
                        <svg className="arrow" viewBox="0 0 20 18" fill="currentColor">
                            <polygon points="8 0 12 0 12 9 15 9 10 14 5 9 8 9" />
                        </svg>
                        <svg className="shape" viewBox="0 0 20 18" fill="currentColor">
                            <path d="M4.82668561,0 L15.1733144,0 C16.0590479,0 16.8392841,0.582583769 17.0909106,1.43182334 L19.7391982,10.369794 C19.9108349,10.9490677 19.9490212,11.5596963 19.8508905,12.1558403 L19.1646343,16.3248465 C19.0055906,17.2910371 18.1703851,18 17.191192,18 L2.80880804,18 C1.82961488,18 0.994409401,17.2910371 0.835365676,16.3248465 L0.149109507,12.1558403 C0.0509788145,11.5596963 0.0891651114,10.9490677 0.260801785,10.369794 L2.90908938,1.43182334 C3.16071592,0.582583769 3.94095214,0 4.82668561,0 Z" />
                        </svg>
                    </div>
                    <span />
                </div>
                <div className="label">
                    <div id='default' className={!isActive && !isDone ? 'show' : 'hide'}>Download C.V.</div>
                    <div id='state' className={isActive || isDone ? 'show' : 'hide'}>
                        <div className="counter">
                            <ul><li /><li>1</li></ul>
                            <ul>
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((val, index) => (
                                    <li key={index}>{val}</li>
                                ))}
                            </ul>
                            <ul>
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((val, index) => (
                                    <li key={index}>{val}</li>
                                ))}
                            </ul>
                            <span>%</span>
                        </div>
                        <span>Done</span>
                    </div>
                </div>
                <div className="progress" />
            </div>
        </div>
    );
};

export default DownloadButton;
