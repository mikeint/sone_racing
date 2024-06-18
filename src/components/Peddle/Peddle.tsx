'use client'
import React, { useEffect, useRef } from 'react';
import './Peddle.css';

interface PeddleProps {
    diceThrow?: () => void;
    redirect?: () => void;
    disabledClass?: string;
}

const Peddle = ({ diceThrow, redirect, disabledClass }: PeddleProps) => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        divRef.current?.focus();
    }, []);

    const handleAction = () => {
        diceThrow?.();
        redirect?.();
    };

    return (
        <div 
            id="throw" 
            className={`peddle ${disabledClass}`} 
            onClick={handleAction}
            tabIndex={0}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleAction();
                }
            }}
            ref={divRef}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Peddle;
