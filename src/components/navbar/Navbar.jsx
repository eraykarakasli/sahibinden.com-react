import React from 'react'
import NavLeft from './navbaritem/NavLeft'
import NavRight from './navbaritem/NavRight'
import PageContainers from '../../containers/PageContainers'

function Navbar() {
    return (
        <div className='bg-[#3F475F] '>
            <PageContainers>
                <div className='flex  items-center justify-between display-block h-16' >
                    <NavLeft />
                    <NavRight />
                </div>
            </PageContainers>
        </div>
    )
}

export default Navbar