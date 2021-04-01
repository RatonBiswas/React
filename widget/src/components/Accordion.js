import React from 'react';

const Accordion = ({items}) => {
    const renderItem = items.map(item=>{
        return <div>
            <div className="title active">
                <i className="dropdown icon"></i>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                
            </div>
        </div>
    })
    return (
        <div>
           {renderItem}
        </div>
    );
};

export default Accordion;