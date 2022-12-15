import React from 'react'

function Meme () {
  return (
    <div className='main'>
        <form className='form'>
            <input type="text" placeholder='top text' className='form-input'/>
            <input type="text" placeholder='top bottom' className='form-input'/>
            <button className='form-button'>Generate new meme</button>
        </form>
    </div>
  )
}

export default Meme 