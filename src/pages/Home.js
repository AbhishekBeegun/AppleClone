import React from "react";
import { useEffect } from "react";
import Carousel,{ CarouselItem } from "./carousel";
import './page.css';
import m2air from'../assets/homepage/poweredbym2.png'
import m2pro from'../assets/homepage/superchargedm2.png'
import watch7logo from '../assets/homepage/watchseries7text.png'
import ipadair from '../assets/homepage/ipadairtext.png'
import applecardlogo from '../assets/homepage/applecardlogo.png'

function Home() {
    
    return(
        <div className="HomeMain">
        <nav className= "nav-content">
            
            <div className="nav-icon">
                <div className="bar-one"></div>
                <div className="bar-two"></div>
            </div>

            <div className="nav-links">

                <a href="" id="logo">
                 <svg xmlns="http://www.w3.org/2000/svg" width="2038" height="2500" viewBox="0 0 496.255 608.728"><path d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z" fill="#999"/></svg>
                </a>

                <a href="#">Store</a>
                <a href="#">Mac</a>
                <a href="#">iPad</a>
                <a href="#">iPhone</a>
                <a href="#">Watch</a>
                <a href="#">Airpods</a>
                <a href="#">Tv & Home</a>
                <a href="#">Only on Apple</a>
                <a href="#">Accessories</a>
                <a href="#">Support</a>

                <svg className="search-icon">
                </svg>
            </div>
        </nav>

        <a href="">
        <section className="one"
        style={{
            backgroundImage:`url("https://www.apple.com/v/home/ar/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_small_2x.jpg")`,
            backgroundPosition: 'center',
            backgroundSize:'contain',
            backgroundRepeat: 'no-repeat'
        }}>
           
            <p>iPhone 14 Pro</p>
            <p>Pro. Beyond.</p>
            <button>Learn more &gt; </button>
            <button>Buy &gt; </button>
            
        </section></a>
   
        <a href="">
        <section className="two"
                    style={{
                        backgroundImage:`url("https://www.apple.com/v/home/ar/images/heroes/iphone-14/hero_iphone14_preorder__c4g2wjzuugqe_largetall.jpg")`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
            <p>iPhone 14</p>
            <p>Big and bigger</p>
            <p>iPhone 14 Plus available starting 10.7</p>
    
            <button>Learn more &gt;</button>
            &emsp;
            <button>Shop &gt;</button>
        </section></a>

        <a href="">
            <section className="three"
            style={{
                backgroundImage:`url("https://www.apple.com/v/home/ar/images/heroes/apple-watch-series-8/hero_apple_watch_series_8__bjc1ok5mkjua_largetall.jpg")`,
                backgroundPosition: 'center',
                backgroundRepeat:'no-repeat',
                "@media (max-width: 600px)": {
                    backgroundImage:`url()`
                  },
            }}>
                <img src ="https://www.apple.com/v/home/ar/images/logos/apple-watch-series-8/hero_logo_apple_watch_series_8__ezarmmoobhg2_mediumtall.png" />
                <p>A healthy leap ahead.</p>
                <button>Learn more &gt;</button>
                <button>Buy &gt;</button>
            </section>
        </a>

        <div className="homegrid">
            <a href="#"
             style={{
                backgroundImage:`url("https://www.apple.com/v/home/ar/images/promos/apple-watch-se/promo_apple_watch_se__f9702l6odgi2_large.jpg")`,
                backgroundPosition: 'center',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
            }}>
                <img src="https://www.apple.com/v/home/ar/images/logos/apple-watch-se/promo_logo_apple_watch_se__b85vr9ri02gi_large.png" />
                <h6>A great deal to love.</h6>
                <button>Learn More &gt;</button>
                <button>Buy &gt;</button>
            </a>

            <a href="#"
             style={{
                backgroundImage:`url("https://www.apple.com/v/home/ar/images/promos/apple-watch-ultra/promo_apple_watch_ultra_avail__ddgwll601eie_large.jpg")`,
                backgroundPosition: 'center',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
           }}>
            <img src="https://www.apple.com/v/home/ar/images/logos/apple-watch-ultra/promo_logo_apple_watch_ultra__ebzaahharnue_large.png" />
                <p>Adventure awaits.</p>
                <p>Available starting 9.23</p>
                <button>Learn More &gt;</button>
                <button>Order now &gt;</button>
            </a>

            <a href="#"
             style={{
                backgroundImage:`url("https://www.apple.com/v/home/ar/images/promos/apple-fitness-plus-iphone/promo-apple-fitness-plus-iphone__bzeal882mv7m_large.jpg")`,
                backgroundPosition: 'center',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
           }}>
                <img src="https://www.apple.com/v/home/ar/images/logos/apple-fitness-plus-iphone/promo_logo_fitness_plus_iphone__dpayetemakq6_large.png" />
                <p>Fitness for everyone.</p>
                <p>Now all you need is iphone.</p>                
                <button>Learn More &gt;</button>
                <button>Notify me &gt;</button>
            </a>

            <a href="#"
             style={{
                backgroundImage:`url("https://www.apple.com/v/home/ar/images/promos/airpods-pro/promo_airpods_pro_avail__gaxggskofx6y_large.jpg")`,
                backgroundPosition: 'center',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
                 }}>
                <h6>AirPods Pro</h6>
                <p>Rebuild from the sound up.</p>
                <p>Available starting 9.23</p>
                <button>Learn More &gt;</button>
                <button>Order now &gt;</button>
            </a>

            <a href="#"
             style={{
                backgroundImage:`url("https://www.apple.com/v/home/ar/images/promos/back-to-school-2022/promo_bts_last_chance__dqftd8sek46e_large.jpg")`,
                backgroundPosition: 'center',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
           }}>
                <h6>Get supercharged<br></br>for college.</h6>
                <p>Last chance to get a gift card.</p>
                <button>Shop now &gt;</button>
            </a>

            <a href="#"
             style={{
                backgroundImage:`url("https://www.apple.com/v/home/ar/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg")`,
                backgroundPosition: 'center',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
                }}>
                <img src={applecardlogo} alt="Card" />
                <p>Get up to 3% Daily Cash back<br></br>with every purchase</p>
                <button>Learn More &gt;</button>
                <button>Apply now &gt;</button>
            </a>
        </div>

        <section>
        <div className="carou">
            <Carousel>
            <CarouselItem><img src="https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/689x387.jpg" alt="IMG Removed FROM URL" ></img></CarouselItem>
            <CarouselItem><img src="https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/689x387.jpg" alt = "NOT LOADED"></img></CarouselItem>
            <CarouselItem><img src="https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/689x387.jpg" alt ="NOT LOADED"></img></CarouselItem>
            </Carousel>
        </div>
        </section> 

        <section className="footer">
            <p> 1. Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying Location. Only one Apple Gift Card per eligible Mac or iPad per<br></br> Qualified Purchaser. Offer subject to availability. While supplies last. Qualified Purchasers shall receive a discount equal to the value of the Apple Gift Card off the price of the<br></br> eligible Mac or iPad, but will be charged for all items in their cart, including the Apple Gift Card. Important notice regarding the checkout receipt and monthly statement for<br></br> Apple Card Monthly Installment (ACMI) purchases with this promotion: Qualified Purchasers selecting ACMI (a 0% APR payment option) as payment type at checkout shall<br></br> receive a discount equal to the value of the Apple Gift Card off the price of the eligible Mac or iPad. This will result in one ACMI installment plan over 12 months for the<br></br> eligible iPad or Mac discounted by the instant credit, and a second ACMI installment plan over 12 months for the full price of the Apple Gift Card. The total combined amount<br></br> charged over the two separate ACMI installment plans will reflect the original full retail price of the Eligible Product. Separately, Qualified Purchasers will receive and be<br></br> charged for the Apple Gift Card in the amount of the applicable discount off the eligible Mac or iPad. ACMI is subject to credit approval and credit limit. Variable APRs for <br></br>Apple Card other than ACMI range from 12.49% to 23.49% based on creditworthiness. Rates as of July 1, 2022. If you choose the pay‑in‑full or one‑time‑payment option for<br></br> an ACMI‑eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes<br></br>and shipping are not included in ACMI transactions and are subject to your standard purchase APR. See the Apple Card Customer Agreement at<br></br> https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf for more information. ACMI is not available for purchases made online at the<br></br>following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and<br></br> Veterans and Military Purchase Programs, or on refurbished devices. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch. Available for qualifying<br></br>applicants in the United States. If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about accessing this offer or applying for<br></br>Apple Card. This offer cannot be combined with the Apple Employee Purchase Plan or business loyalty pricing. Availability of in‑store promotion offerings may be limited by<br></br>Apple Store location closures as a result of COVID‑19. Additional restrictions apply. View full terms and conditions of offer here.<br></br>
            <br></br>
             2. Apple Music requires a subscription. Compatible hardware and software required.<br></br>
             <br></br>
            To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings &gt; General &gt; Software Update. Tap Download and Install.<br></br>
             Available for qualifying applicants in the United States.<br></br>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.<br></br>
             Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.<br></br>
              Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.<br></br></p>
        </section>



 
        </div>

   

    )
}

export default Home