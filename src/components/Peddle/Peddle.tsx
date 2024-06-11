'use client'
import React from 'react';
import './Peddle.css'

interface PeddleProps {
    diceThrow?: () => void;
    redirect?: () => void;
    disabledClass?: string
}

const Peddle = ({ diceThrow, redirect, disabledClass }: PeddleProps) => {

    return (
        <div id="throw" className={`peddle ${disabledClass}`} onClick={() => {
            diceThrow?.();
            redirect?.();
        }}>
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
