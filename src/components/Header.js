import React from 'react'
import { NETFLIX_LOGO_URL } from '../utils/Logo';

const Header = () => {
  return (
    <div className='absolute w-60 bg-gradient-to-b from-black '>
      <img src={NETFLIX_LOGO_URL} alt="Netflix Logo" />
    </div>
  )
}

export default Header
