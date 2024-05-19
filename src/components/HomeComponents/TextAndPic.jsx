import React from 'react'
import { Link } from 'react-router-dom'

const TextAndPic = () => {
  return (
    <div className='textandpic'>
        <div className="text">
            <div className="bigtext">
                Your Favorite Food Delivery Partner
            </div>
            <div className="smalltext">
                The food at your doorstep. Why starve when you have us. Your hunger partner. Straight out of the oven to your doorstep.
            </div>
            <div className="field">
                <input type="text"  placeholder='Enter your delivery location'/>
                <button>Order Now</button>
            </div>
            <div className="store">
                <div className="applestore">
                    <Link to='/'><img src="src/images/appstore.png" alt="appstore" style={{ width: '230px', height: '80px' }}/></Link>
                </div>
                <div className="playstore">
                    <Link to='/'><img src="src/images/playstore.png" alt="playstore" style={{ width: '230px', height: '80px' }}/></Link>
                </div>
            </div>
        </div>
        <div className="delivery">
            <img src="src/images/delivery guy.jpg" alt="delivery guy" style={{ width: '900px', height: '600px' }}/>
        </div>
    </div>
  )
}

export default TextAndPic