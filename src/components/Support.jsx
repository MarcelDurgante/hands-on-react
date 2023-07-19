import { useState } from 'react';

const Support = () => {

    const [count, setCount] = useState(0);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <hgroup>
                <h2>Supported: {count}</h2>
                <button className='outline' onClick={() => setCount(count + 1)}>Click to support</button>
            </hgroup>
        </div>
    )
}

export default Support;