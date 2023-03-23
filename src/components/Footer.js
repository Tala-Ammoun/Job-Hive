import React from 'react'

function Footer() {
  const date = new Date();
  return (
    <div className='text-center bg-amber-400'>
      <p>©  {date.getFullYear()} JobHive</p>
    </div>
  )
}

export default Footer
