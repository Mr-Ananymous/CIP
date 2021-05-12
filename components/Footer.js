import React from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p classNAme="footer-subscription-heading">

                </p>
                <p className="footer-subscription-text">
                   
                </p>
                <div className="input-areas">
                   <form>
                    <input
                       type="email"
                       placeholder="Your Email"
                       className="footer-input" 
                    />  
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>       
                </div>
            </section>
          <div className="footer-links">
              <div className="footer-link-wrapper">
              <div className="footer-link-items">
                  <h2>About Project</h2>
                     
              </div>
              <div className="footer-link-items">
                  <h2>About Project</h2>
                     
              </div>
              </div>
              <div className="footer-link-wrapper">
              <div className="footer-link-items">
                  <h2>About Project</h2>
                     
              </div>
              <div className="footer-link-items">
                  <h2>About Project</h2>
                     
              </div>
              </div>    
              </div>
              <section className="social-media">
                  <div className="social-media-wrap">
                  <div className="footer-logo">
                      <Link to="/" className="social-logo">
                      <i class="fas fa-code"/> &nbsp; SketchtoCode 
                      </Link>
                      </div>
                     <small className="website-rights" >SketchtoCode © xxxx </small>
                     <div className="social-icons">
                         <Link className=" social-icon-link facebook"
                          to="/"
                          target="blank"
                          aria-label='Facebook'
                         >
                             <i className="fab fa-facebook-f" />
                         </Link>
                         <Link className=" social-icon-link  instagram"
                          to="/"
                          target="blank"
                          aria-label='Instagram'
                         >
                             <i className="fab fa-instagram" />
                         </Link>
                         <Link className=" social-icon-link  facebook"
                          to="/"
                          target="blank"
                          aria-label='Gmail'
                         >
                             <i class="fas fa-envelope"></i>
                         </Link>
                         </div> 
                  </div>

              </section>
        </div>
    )
}

export default Footer
