import React from 'react'
import SocialMedia from '../../components/SocialMedia';
import './footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="media">
        <SocialMedia />
      </div>

      <p> &copy; 2022 lauratelqiu.com</p>
    </div>
  );
}

export default Footer;

