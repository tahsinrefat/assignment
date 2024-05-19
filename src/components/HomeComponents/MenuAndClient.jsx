import React from 'react'

const MenuAndClient = () => {
  return (
    <div className='menu-and-client'>
        <div className="inspire-text">
            <div className="big-inspire">
                More Than <span>10,000</span> Dishes To Order!
            </div>
            <div className="small-inspire">
                Welcome to The Biggest Network of Food Ordering & Delivery
            </div>
        </div>
        <div className="menu">
            <div className='div1'>
                <div className="foods1">
                    <div className="pizza">
                        <div className="emoji">
                        🍕
                        </div>
                        <div className="food-name">
                            Pizza
                        </div>
                    </div>

                    <div className="burger">
                        <div className="emoji">
                        🍔
                        </div>
                        <div className="food-name">
                            Burger
                        </div>
                    </div>

                    <div className="sushi">
                        <div className="emoji">
                        🍣
                        </div>
                        <div className="food-name">
                            Sushi
                        </div>
                    </div>
                </div>
                <div className="quote1">
                    <div className="offer-text">
                        Find <span className='deals'>deals</span>, <span className='free'>free delivery</span>, and more from our restaurant partners.
                    </div>
                    <img src="src/images/scooty.png" alt="scooty" style={{ width: '120px', height: '120px' }}/>
                </div>
            </div>
            <div className='div2'>
                <div className="quote2">
                    <div className="quotation">
                        <svg width="61" height="51" viewBox="0 0 61 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.7358 48.1929L34.7358 39.1414C34.7358 37.9132 35.8553 36.9185 37.2354 36.9185C42.1603 36.9185 44.8395 32.4267 45.2113 23.5598L37.2354 23.5598C35.8554 23.5598 34.7358 22.5637 34.7358 21.3369L34.7358 2.2243C34.7358 0.996609 35.8553 0.00187113 37.2354 0.00187137L58.5003 0.00187509C59.8801 0.00187533 61 0.997702 61 2.2243L61 21.3371C61 25.5872 60.5175 29.4874 59.5704 32.9319C58.5974 36.463 57.1039 39.5501 55.1322 42.1083C53.1044 44.7373 50.5657 46.8003 47.591 48.237C44.5938 49.6829 41.1097 50.4167 37.2344 50.4167C35.8554 50.4157 34.7358 49.4201 34.7358 48.1929ZM2.49904 36.9177C1.11907 36.9177 -6.62896e-06 37.9132 -6.84339e-06 39.1396L-8.42633e-06 48.193C-8.64088e-06 49.4201 1.11906 50.415 2.49903 50.415C6.37246 50.415 9.85829 49.681 12.8536 48.2353C15.8299 46.7987 18.3682 44.7374 20.3958 42.1066C22.3687 39.5484 23.8621 36.4611 24.8351 32.9283C25.7827 29.4838 26.2642 25.5835 26.2642 21.3352L26.2642 2.22243C26.2642 0.994743 25.144 4.39632e-06 23.7646 4.15513e-06L2.49904 4.36947e-07C1.11907 1.95665e-07 -1.74089e-07 0.995671 -3.88582e-07 2.22243L-3.73037e-06 21.3352C-3.945e-06 22.5627 1.11907 23.5581 2.49904 23.5581L10.363 23.5581C9.99564 32.4257 7.35505 36.9177 2.49904 36.9177Z" fill="#191720"/>
                        </svg>
                    </div>
                    <div className="lorem">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quo similique et cumque ipsam vitae nisi, alias corporis placeat!
                    </div>
                </div>
                <div className="foods2">
                    <div className="pasta">
                        <div className="emoji">
                        🍝
                        </div>
                        <div className="food-name">
                            Pasta
                        </div>
                    </div>

                    <div className="salad">
                        <div className="emoji">
                        🍝
                        </div>
                        <div className="food-name">
                            Salad
                        </div>
                    </div>

                    <div className="desserts">
                        <div className="emoji">
                        🍰
                        </div>
                        <div className="food-name">
                            Desserts
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuAndClient