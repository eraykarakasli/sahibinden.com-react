import React from 'react'
import Navbar from '../components/navbar/Navbar'
import PageContainers from '../containers/PageContainers'
import Aside from '../components/aside/Aside'
import Content from '../components/home/Content'


function Home() {
    return (
        <div >
            <Navbar />
            <PageContainers>
                <div className='flex my-5 '>
                    <Aside className='inline w-1/3 p-4 bg-gray-200' />
                    <Content className='inline w-2/3 p-4 bg-blue-200' />
                </div>
            </PageContainers>

        </div>
    )
}

export default Home