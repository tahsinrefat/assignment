import React from 'react'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="news">
            <span className="sub">Subscribe to our newsletter</span><br />
            <span className='browse'>Browse local restaurants and businesses for delivery by entering your address blow.</span>
        </div>
        <div className="field">
                <input type="text"  placeholder='Enter your email address...'/>
                <button>Order Now</button>
        </div>
    </div>
  )
}

export default Subscribe