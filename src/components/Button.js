import React from 'react'

const Button = ({ name }) => {
    return (
        <button className='m-2 px-4 py-2 bg-gray-200 rounded-lg flex-shrink-0'>{name}</button>
    )
}

export default Button