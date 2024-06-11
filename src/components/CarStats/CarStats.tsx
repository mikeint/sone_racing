import './CarStats.css'

const calculateBarWidths = (value:number, min:number, max:number) => {
    if (value === undefined || value === null) return 0;
    return Math.max(0, Math.min((value - min) / (max - min) * 100, 100));
}

const CarStats = (stats: any) => {  
    return (
        <div className="stats-barGraph">
            <div className="stats-bar" style={{width: `${calculateBarWidths(stats.stats?.horsepower ?? 0, 0, 1500)}%`, backgroundColor: '#FF5733'}}>
                <span className="stats-barLabel">horsepower: {stats.stats?.horsepower}</span>
            </div>
            <div className="stats-bar" style={{width: `${calculateBarWidths(stats.stats?.weight ?? 0, 1000, 7000)}%`, backgroundColor: '#ffd133'}}>
                <span className="stats-barLabel">weight: {stats.stats?.weight}lbs</span>
            </div>
            <div className="stats-bar" style={{width: `${calculateBarWidths(stats.stats?.acceleration ?? 0, 1, 100)}%`, backgroundColor: '#33C3FF'}}>
                <span className="stats-barLabel">acceleration: {stats.stats?.acceleration}</span>
            </div>
            <div className="stats-bar" style={{width: `${calculateBarWidths(stats.stats?.wheelspin ?? 0, 0, 100)}%`, backgroundColor: '#FF33C7'}}>
                <span className="stats-barLabel">wheelspin: {stats.stats?.wheelspin}%</span>
            </div>
        </div>
    )
}

export default CarStats