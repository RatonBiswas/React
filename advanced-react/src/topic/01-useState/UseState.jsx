import {useState} from 'react';

const UseState = () => {
    const [count,setCount] = useState(0)
    const handleClick = () => {
        setCount(count+1)
    }
    return (
        <div>
            <h4>You Click {count} times</h4>
            <button className='btn' type='button' onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default UseState;
