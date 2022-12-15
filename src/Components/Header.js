import React from 'react'

function Header() {
  return (
    <div className='header'>
        <nav>
            <img src={require('../images/smile.png')} className='header-img' alt='logo'></img>
            <h2 className='header-title'>Meme generator</h2>
            <h4 className='header-line'>Generate your own jokes</h4>
        </nav>
    </div>
  )
}

export default Header