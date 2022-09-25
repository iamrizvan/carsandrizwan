import "./CarFooter.css";
import { FaInstagram, FaTiktok, FaFacebookF,FaCar } from "react-icons/fa";
import { FiTwitter, FiYoutube } from "react-icons/fi";

function CarFooter() {
  const image = require("../images/car.png");
  return (
    <>
      <section className="footer-section">
        <div className="footer-contacts">
          <div className="app-menu">
          <div  className="footer-list">
            <ul>
              <li> <a href="">Listing</a></li>
              <li> <a href="">FAQ</a></li>
              <li> <a href="">Blog</a></li>
              <li> <a href="">About Us</a></li>
              <li> <a href="">Our Team</a></li>
              <li> <a href="">Contact</a></li>
            </ul>
          </div>
          </div>          
          <div className="app-about" >
            <p>
            Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.
            </p>
          </div>
          <div className="app-contact" >
            <h1>971 <span style={{color:"orange"}}>581870664</span></h1>
            <h3>rzkn000@gmail.com</h3>
            <p>Haroon Motors Showroom no. 145</p>
            <p>Al Jerf Industrial 1 - Ajman - United Arab Emirates</p>
          </div>
        </div>
        <div className="footer-outline">
        </div>
        <div className="footer-copyright">
          <div className="copyright-text">
          <p >&copy; CARS AND RIZWAN</p>
          </div>
         </div>
         <div className="footer-copyright"> 
          <div className="social-footer-container">
            <div className="icon-container">
              <FaInstagram />
            </div>
            <div className="icon-container">
              <FaTiktok />
            </div>
            <div className="icon-container">
              <FaFacebookF />
            </div>
            <div className="icon-container">
              <FiYoutube />
            </div>
            <div className="icon-container">
              <FiTwitter />
            </div>
          </div>
          
        </div>
        
      </section>
    </>
  );
}

export default CarFooter;