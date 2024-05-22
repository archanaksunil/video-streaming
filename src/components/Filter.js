import React from 'react'
import Button from './Button';

const Filter = () => {
    const list = ["All", "Watched", "New To You", "Recently uploaded", "Live", "Tourist destination", "Music", "Trailer", "Software Engineering", "One Piece", "Anime", "Machine Learning", "Cooking"];
    return (
        <div className='flex overflow-x-auto'>
            {list.map(l => <Button key={l} name={l} />)}
        </div>
    )
}

export default Filter