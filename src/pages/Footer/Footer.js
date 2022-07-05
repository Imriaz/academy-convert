import React from 'react';
import logo from "../../images/Academy_logo.png";
import youtube from "../../images/youtube_logo.png";
import linkedin from "../../images/Linkedin_logo.png";
import facebook from "../../images/Facebook_logo.png";
import cp from "../../images/copyright_icon.png";
import "./footer.css";

const Footer = () => {
    return (
      <section className="footer-container">
        <main className="footer-container__main">
          <img className="footer-container__main__logo" src={logo} alt="BJIT Logo"></img>
          <div className="footer-container__main__cinfo">
            <p className="footer-container__main__cinfo__company">Company</p>
            <p className="footer-container__main__cinfo__about">About Us</p>
            <p className="footer-container__main__cinfo__contact">Contact</p>
            <p className="footer-container__main__cinfo__contact">
              BJIT website
            </p>
          </div>
          <div className="footer-container__main__tinfo">
            <p className="footer-container__main__tinfo__train">
              Training program
            </p>
            <p className="footer-container__main__tinfo__talent">
              Empower fresh talents
            </p>
            <p className="footer-container__main__tinfo__cross">
              Cross platform training
            </p>
            <p className="footer-container__main__tinfo__cross">
              Upskill training
            </p>
          </div>
          <div className="footer-container__main__sub">
            <p className="footer-container__main__sub__touch">Get in touch</p>
            <aside className="footer-container__main__sub__cont">
              <input
                className="footer-container__main__sub__cont__email"
                placeholder="Enter your email address"
              ></input>
              <button
                data-testid="button"
                className="footer-container__main__sub__cont__sub"
              >
                Subscribe
              </button>
            </aside>
          </div>
        </main>

        <div className="footer-container__middle-line"> &nbsp; </div>

        <div className="footer-container__end-info">
          <p className="footer-container__end-info__copyright">Copyright</p>
          <img className="footer-container__end-info__cp-image" src={cp} alt="Copyright Icon"></img>
          <p className="footer-container__end-info__copyright">
            2022 BJIT Academy Ltd. All rights reserved.
          </p>
          <p className="footer-container__end-info__follow">Follow us</p>
          <img
            className="footer-container__end-info__youtube"
            src={youtube} alt="Youtube Logo"
          ></img>
          <img
            className="footer-container__end-info__linkedin"
            src={linkedin} alt="Linkedin Logo"
          ></img>
          <img
            className="footer-container__end-info__facebook"
            src={facebook} alt="Facebook Logo"
          ></img>
          <p data-testid="value" hidden>
          </p>
        </div>
      </section>
    );
};

export default Footer;