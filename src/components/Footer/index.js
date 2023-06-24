import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineYoutube,
} from "react-icons/ai";
import logo from "../../img/логотип.svg";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { BsGeoAlt, BsTelephone } from "react-icons/bs";
function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <nav className="footer__nav">
            <ul className="footer__list">
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
              <div className="footer__list-ru">
                <p>KG</p>
                <p>RU</p>
              </div>
            </ul>
            <ul className="footer__list">
              <h2>Быстрые ссылки</h2>
              <li className="footer__item">
                <Link>О школе</Link>
                <br />
                <Link>Наши курсы</Link>
                <br />
                <Link>О нас</Link>
              </li>
            </ul>
            <ul className="footer__list">
              <h2>Социальные сети</h2>
              <li className="footer__item">
                <Link
                  target="_blink"
                  className="icons"
                  to={"https://www.instagram.com/motion_web"}
                >
                  <AiOutlineInstagram />
                </Link>
                <Link target="_blink" className="icons" to={"/"}>
                  <AiOutlineYoutube />
                </Link>
                <Link target="_blink" className="icons" to={"/"}>
                  <CiFacebook />
                </Link>
                <Link target="_blink" className="icons" to={"/"}>
                  <br />
                  <FiTwitter />
                </Link>
                <Link target="_blink" className="icons" to={"/"}>
                  <FaTiktok />
                </Link>
                <Link target="_blink" className="icons" to={"/"}>
                  <TbBrandTelegram />
                </Link>
              </li>
            </ul>
            <ul className="footer__list">
              <h2>Контакты</h2>
              <li className="footer__item">
                <Link target="_blink" to={"/"}>
                  <AiOutlineMail className="ikonLeft" />{" "}
                  @motionwebteam@gmail.com
                </Link>
                <br />
                <Link to={"tel:+996 559 - 69 - 26 - 26"}>
                  <BsTelephone className="ikonLeft" /> +996 559 - 69 - 26 - 26
                </Link>
              </li>
            </ul>
            <ul className="footer__list">
              <h2>Адреса</h2>
              <li className="footer__item">
                <Link
                  target="_blink"
                  to={
                    "https://2gis.kg/bishkek/geo/70030076168710138?m=74.810915%2C42.762056%2F10.85"
                  }
                >
                  <BsGeoAlt className="ikonLeft" /> Турусбекова 109 / 3
                </Link>
                <br />
                <Link target="_blink" className="id" to={"#"}>
                  Идентификационный код: 1234567890
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
