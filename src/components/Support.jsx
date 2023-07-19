import { useState } from 'react';

const Support = () => {

    const [supportCount, setSupportCount] = useState(0);
    const [unsupportCount, setUnsupportCount] = useState(0);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <button className='outline'
                onClick={() => setSupportCount(supportCount + 1)}>
                {supportCount === 0 ? 'Click to support !' : `Supported ${supportCount} times`}
            </button>
            <button className='secondary outline'
                onClick={() => setUnsupportCount(unsupportCount - 1)}>
                {unsupportCount === 0 ? 'Click to unsupport :( ' : `Unsupported: ${unsupportCount} times`}
            </button>
        </div>
    )
}

export default Support;