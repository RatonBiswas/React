import React from 'react';

const Accordion = ({items}) => {
    const titleClicked = (index)=>{
        console.log('Title Clicked', index)
    }
    const renderItem = items.map((item,index) =>{
        return <React.Fragment key={item.title}>
            <div className="title active" onClick={()=>titleClicked(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className="content active">{item.content}</div>
        </React.Fragment>
    })
    return (
        <div className="ui styled accordion">
           {renderItem}
        </div>
    );
};

export default Accordion;