import React from "react";
import ImgGithub from "../../img/Vector.png";
import ImgLinkedIn from "../../img/icon _linkedin_.png";
import ImgTwitter from "../../img/icon _twitter.png";
import ImgWa from "../../img/icon _phone call_.png";
import ImgFacebook from "../../img/icon _facebook_.png";
import "../../css/BodyAndFooter.css";
function ContainerFooter() {
  return (
    <footer className="footer">
      <div className="ContactUs">
        <div className="Connect">
          <p>Let's Connect and Say Hi!</p>
        </div>
        <div className="work">
          <p>If you’d like to say hi or work with me:</p>
        </div>
        <div className="typeText">
          <div className="inputContact">
            <input type="text" placeholder="Type a massage here" />
          </div>
          <div className="buttonContact">
            <button>Send</button>
          </div>
        </div>
      </div>
      <div className="SocialMedia">
        <div className="textSocialmedia">
          <p>Social Media Links</p>
        </div>
        <div className="listSocialMedia">
          <div className="linkSocialMedia">
            <div className="Github">
              <a href="#">
                <div className="imgGithub">
                  <img src={ImgGithub} alt="https://github.com/fadhil23-pdf" />
                </div>
                <div className="nameGithub">
                  <p>fadhil23-pdf</p>
                </div>
              </a>
            </div>
            <div className="Linkedin">
              <a href="#">
                <div className="imgLinkedin">
                  <img src={ImgLinkedIn} alt="https://www.linkedin.com/in/rizki-nur-fadhila-025578227/" />
                </div>
                <div className="nameLinkedin">
                  <p>Rizki Nur Fadhila</p>
                </div>
              </a>
            </div>
            <div className="Twitter">
              <a href="">
                <div className="imgTwitter">
                  <img src={ImgTwitter} alt="https://twitter.com/fdhlrizki" />
                </div>
                <div className="nameTwitter">
                  <p>Fdhlrizki</p>
                </div>
              </a>
            </div>
            <div className="Wa">
              <a href="">
                <div className="imgWa">
                  <img src={ImgWa} alt="https://wa.me/6285963956970" />
                </div>
                <div className="nameWa">
                  <p>+62 859-6395-6970</p>
                </div>
              </a>
            </div>
            <div className="Facebook">
              <a href="">
                <div className="imgFacebook">
                  <img src={ImgFacebook} alt="https://www.facebook.com/fdhlrizki.23" />
                </div>
                <div className="nameFacebook">
                  <p>Rizki Fadhila</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContainerFooter;
