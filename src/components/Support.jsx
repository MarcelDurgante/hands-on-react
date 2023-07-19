import { useState } from 'react';

const Support = () => {

    const [count, setCount] = useState(0);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <button className='outline'
                onClick={() => setCount(count + 1)}>
                {(() => {
                    if (count === 0) {
                        return 'Click to support!'
                    } else {
                        return `Liked:  ${count} times`;
                    }
                })()}
            </button>
            <button className='secondary outline'
                onClick={() => setCount(count - 1)}>
                {(() => {
                    if (count === 0) {
                        return 'Click to unsupport :('
                    } else {
                        return `Disliked:  ${count} times`;
                    }
                })()}
            </button>
        </div>
    )
}

export default Support;