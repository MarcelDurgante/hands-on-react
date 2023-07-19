import { useState, useEffect } from 'react'

const ListCast = () => {
    const [cast, setCast] = useState([]);

    const fetchCast = async () => {
        const response = await fetch('cast.json');
        setCast(await response.json());
    }

    useEffect(() => {
        fetchCast();
    }, [])

    console.log(cast.map(item => item.slug).join(", "));

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
            gap: '1rem',
            marginBottom: '1rem'
        }}>
            {
                cast.map(member => (
                    <a key={member.id} data-tooltip={member.name} >
                        {/* the thumbnails ( small squared images ) end in '_tn.svg'. If used only '.svg' the image are full body.  */}
                        <img src={`images/${member.slug}_tn.svg`} alt={member.name} key={member.id} />
                    </a>
                ))
            }
        </div>
    )
}

export default ListCast;