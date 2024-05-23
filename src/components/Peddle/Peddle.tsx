'use client'
import React from 'react';
import './Peddle.css'

interface PeddleProps {
    diceThrow?: () => void;
    redirect?: () => void;
}

const Peddle = ({ diceThrow, redirect }: PeddleProps) => {

    return (
        <div id="throw" className="peddle" onClick={() => {
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
