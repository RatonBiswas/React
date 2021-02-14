import React from 'react';
import './SeasonDisplay.css'

const seasonConfig = {
    Winter:{
        text : "Burr , it is Cold.",
        iconName: 'snowflake'
    },
    Summer:{
        text : "Let's hit on the Beach.",
        iconName: 'sun'
    }
}
const getSeason = (lat,month)=>{
    if(month>2 && month<9){
        return lat > 0 ? 'Summer' : 'Winter'
    }else{
        return lat > 0 ? 'Winter' : 'Summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat,new Date().getMonth())
    const {text,iconName} = seasonConfig[season]
    return (
        <div className='season-display'>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
};

export default SeasonDisplay;