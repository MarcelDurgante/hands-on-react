import { useState, useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const ListCast = ({ onChoice }) => {
    const [cast, setCast] = useState([]);

    const fetchCast = async () => {
        const response = await fetch('cast.json');
        setCast(await response.json());
    }

    useEffect(() => {
        fetchCast();
    }, [])

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`,
            gap: '1rem',
            marginBottom: '1rem'
        }}>
            {
                cast.map(member => (
                    <a onClick={() => onChoice(member)} key={member.id} data-tooltip={member.name} >
                        {/* the thumbnails ( small squared images ) end in '_tn.svg'. If used only '.svg' the image are full body.  */}
                        <img src={`images/${member.slug}_tn.svg`} alt={member.name} key={member.id} />
                    </a>
                ))
            }
        </div>
    )
}

export default ListCast;