import React from 'react'
import see from './see.mp4'

const Five = () => {
  return (
    <div className='center'>
     <video src={see} autoPlay controls={false} style={{ height: '300px', width: '300px' }}  />
</div>
  )
}

export default Five