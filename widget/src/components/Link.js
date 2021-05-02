/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Link = ({className,href,children}) => {
    const onClick = (event) =>{
        event.preventDefault()
        window.history.pushState({},'',href)
    }
    return (
        <div>
            <a className={className} onClick={onClick} href={href}>{children}</a>
        </div>
    );
};

export default Link;