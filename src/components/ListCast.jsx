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
                    <img src={`images/${member.slug}.svg`} alt={member.name} key={member.id} />
                ))
            }
        </div>
    )
}

public\images\aneirin - 11.svg

export default ListCast;