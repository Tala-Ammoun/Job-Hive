import React from 'react'

function Footer() {
  const date = new Date();
  return (
    <div className='text-center'>
      <p>©  {date.getFullYear()} JobHive</p>
    </div>
  )
}

export default Footer
