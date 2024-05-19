import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="upper">
            <div className="downloads">
                <div className="logo">
                    <img src="src/images/slice.png" alt="slice" />
                </div>
                <div className="stores">
                    <img src="src/images/appstore.png" alt="applestore" />
                    <img src="src/images/playstore.png" alt="playstore" />
                </div>
            </div>
            <div className="quick">
                <span>Quick links</span>
                <ul>
                    <li>Features</li>
                    <li>Food Menu</li>
                    <li>Offer</li>
                    <li>Review</li>
                    <li>Rider</li>
                </ul>
            </div>
            <div className="know">
                <span>Get to know us</span>
                <ul>
                    <li>Gift Cards</li>
                    <li>DoorDash Stories</li>
                    <li>LinkedIn</li>
                    <li>Glassdoor</li>
                    <li>Accessibility</li>
                </ul>
            </div>
            <div className="news">
                <span>News</span>
                <ul>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Lift Media</li>
                    <li>Press</li>
                    <li>Presse Kit</li>
                </ul>
            </div>
            <div className="contact">
                <ul>
                    <li>Whatsapp</li>
                    <li>Support 24</li>
                </ul>
            </div>
        </div>
        <div className="lower">
            <div className="copyright">
                © 2023 pizza.All right reserved
            </div>
            <div className="officials">
                <ul>
                    <li>Privacy</li>
                    <li>Policy</li>
                    <li>Terms</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer