import React from 'react'

function ContentContainer({ children }) {
    return (
        <div className='w-[1000px]'>
            {children}
        </div>
    )
}

export default ContentContainer