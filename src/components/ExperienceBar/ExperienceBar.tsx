import React from 'react';
import './ExperienceBar.css';

const ExperienceBar = ({ experience }: any) => {
    const calculateLevel = (experience: number) => { 
        return Math.floor(experience / 50000) + 1;
    };
    const level = calculateLevel(experience); 

    const currentLevelXP = level * 50000;
    const previousLevelXP = (level - 1) * 50000;
    const experienceForCurrentLevel = experience - previousLevelXP;
    const totalExperienceNeeded = currentLevelXP - previousLevelXP;
    const progressPercentage = (experienceForCurrentLevel / totalExperienceNeeded) * 100;

    return (
        <div className="experience-bar">
            <div className="level-indicator">
                Level {level}
            </div>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progressPercentage}%` }}>
                    <div className="progress-text">{experience}<span>XP</span></div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceBar;
