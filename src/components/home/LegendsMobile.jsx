// LegendsMobile.jsx
import React from 'react';

const RainfallLegendMobile = () => {
    const legendStyle = {
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '5px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
        fontSize: '6px',
        zIndex: 1000,
    };

    const itemStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '3px',
    };

    const colorBoxStyle = (background) => ({
        display: 'inline-block',
        width: '12px',
        height: '12px',
        marginRight: '5px',
        borderRadius: '50%',
        background
    });

    return (
        <div style={legendStyle} className='z-30 font-merriweather'>
            <h4>RAINFALL (per day)</h4>
            <div style={itemStyle}><span style={colorBoxStyle('grey')}></span> No Rain</div>
            <div style={itemStyle}><span style={colorBoxStyle('cornflowerblue')}></span> Light Rain: 0.1 - 7.5 mm</div>
            <div style={itemStyle}><span style={colorBoxStyle('yellow')}></span> Moderate Rain: 7.6 - 35.5 mm</div>
            <div style={itemStyle}><span style={colorBoxStyle('orange')}></span> Heavy Rain: 35.6 - 75.5 mm</div>
            <div style={itemStyle}><span style={colorBoxStyle('#DD5746')}></span> Very Heavy Rain: 75.6 - 124.4 mm</div>
            <div style={itemStyle}><span style={colorBoxStyle('red')}></span> Extreme Rain: 124.5 mm & above</div>
        </div>
    );
};

const TrainLegendMobile = () => {
    const legendStyle = {
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '5px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
        fontSize: '12px',
    };

    const itemStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '3px',
    };

    const colorBoxStyle = (background) => ({
        display: 'inline-block',
        width: '12px',
        height: '12px',
        marginRight: '5px',
        borderRadius: '50%',
        background
    });

    return (
        <div style={legendStyle} className='z-30 font-merriweather'>
            <h4>Waterlevel Warning (Approx)</h4>
            <div style={itemStyle}><span style={colorBoxStyle('green')}></span> 0 - 10mm </div>
            <div style={itemStyle}><span style={colorBoxStyle('yellow')}></span> 10 - 15mm</div>
            <div style={itemStyle}><span style={colorBoxStyle('orange')}></span> 15 - 20mm</div>
            <div style={itemStyle}><span style={colorBoxStyle('red')}></span> 20mm & above</div>
        </div>
    );
};

export { RainfallLegendMobile, TrainLegendMobile };
