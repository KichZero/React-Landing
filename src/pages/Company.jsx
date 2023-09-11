import React, { useEffect } from "react";
import "../Style/company.css";

function Company() {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const carouselContent = document.querySelector(".carousel-content");

    root.style.setProperty(
      "--marquee-elements",
      carouselContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      carouselContent.appendChild(carouselContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <div className="comp-main">
      <div className="backgr-block">
        <div class="content">
          <h2>Itdealgroup</h2>
          <h2>Itdealgroup</h2>
        </div>
        <img
          className="img-comp"
          src="https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif"
          alt=""
        />
      </div>

      <div className="about-us">
        {/* <!-- About --> */}
        <section class="sect" id="about">
          <div class="container">
            <div class="section__header">
              <h3 class="section__suptitle">What we do</h3>
              <h2 class="section__title">Story about us</h2>
              <div class="section__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequatLorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card__item">
                <div class="card__inner">
                  <div class="card__img">
                    <img
                      src="https://c4.wallpaperflare.com/wallpaper/873/975/781/python-programming-minimalism-grey-technology-hd-wallpaper-preview.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div class="card__text">Python course</div>
                </div>
              </div>

              <div class="card__item">
                <div class="card__inner">
                  <div class="card__img">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/020/454/831/non_2x/detailed-gold-coin-ethereum-eth-token-with-pcb-tracks-in-black-and-white-on-dark-background-digital-gold-in-techno-style-for-website-or-banner-illustration-vector.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div class="card__text">Crypto projects</div>
                </div>
              </div>

              <div class="card__item">
                <div class="card__inner">
                  <div class="card__img">
                    <img
                      src="https://cutewallpaper.org/26/best-programming-language-wallpaper/minimal-coding-wallpaper-3840x2160-rwallpaper.png"
                      alt=""
                    ></img>
                  </div>
                  <div class="card__text">Tech Stack</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* technology */}
      <div className="marquee">
        <ul className="marquee-content carousel-content">
          <li>
            <i className="fab fa-github"></i>
          </li>
          <li>
            <i className="fab fa-js"></i>
          </li>
          <li>
            <i className="fab fa-react"></i>
          </li>
          <li>
            <i className="fab fa-python"></i>
          </li>
          <li>
            <i className="fab fa-php"></i>
          </li>
          <li>
            <i className="fab fa-vuejs"></i>
          </li>
          <li>
            <i className="fab fa-angular"></i>
          </li>
          <li>
            <i className="fab fa-node"></i>
          </li>
          <li>
            <i class="fa-brands fa-html5"></i>
          </li>
          <li>
            <i class="fa-brands fa-css3-alt"></i>
          </li>
          <li>
            <i className="fab fa-docker"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Company;
