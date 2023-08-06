import React from 'react'

import ContentContainer from '../../containers/ContentContainer'

function Content() {
    return (
        <ContentContainer>
            <div>
                <div className='flex justify-between border-b p-1 '>
                    <div className=''>   Anasayfa Vitrin </div>
                    <div className='text-blue-800 hover:underline cursor-pointer'> Tüm vitrin ilanlarını göster</div>
                </div>

                    
            
            </div>
        </ContentContainer>
    )
}

export default Content