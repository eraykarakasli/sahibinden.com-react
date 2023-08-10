import React from 'react'

function LoginContainer({children}) {
    return (
      <div className='w-[500px] flex items-center justify-center m-auto'>
          {children}
      </div>
      )
}

export default LoginContainer