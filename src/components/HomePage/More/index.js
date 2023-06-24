import React from "react";
import articles from "../../../img/Articles.png";
import { RxReader } from "react-icons/rx";
const More = () => {
  return (
    <div id="articles">
      <div className="container">
        <div className="articles">
          <h3>
            Главная / <span>Наши курсы</span>
          </h3>
          <h2>Статьи</h2>
          <div className="articles__block">
            <div className="articles__card">
              <img src={articles} alt="" />
              <div className="articles__card-block">
                <span className="articles__card-block-state">Статьи</span>
                <p>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </p>
                <ul className="articles__card-date">
                  <li className="articles__card-date-icons">
                    <RxReader className="articles__card-date-icon" />
                    <span className="articles__card-date-read">Читать</span>
                  </li>
                  <span className="articles__card-date-data">01.02.2022</span>
                </ul>
              </div>
            </div>
            <div className="articles__card">
              <img src={articles} alt="" />
              <div className="articles__card-block">
                <span className="articles__card-block-state">Статьи</span>
                <p>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </p>
                <ul className="articles__card-date">
                  <li className="articles__card-date-icons">
                    <RxReader className="articles__card-date-icon" />
                    <span className="articles__card-date-read">Читать</span>
                  </li>
                  <span className="articles__card-date-data">01.02.2022</span>
                </ul>
              </div>
            </div>
            <div className="articles__card">
              <img src={articles} alt="" />
              <div className="articles__card-block">
                <span className="articles__card-block-state">Статьи</span>
                <p>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </p>
                <ul className="articles__card-date">
                  <li className="articles__card-date-icons">
                    <RxReader className="articles__card-date-icon" />
                    <span className="articles__card-date-read">Читать</span>
                  </li>
                  <span className="articles__card-date-data">01.02.2022</span>
                </ul>
              </div>
            </div>
            <div className="articles__card">
              <img src={articles} alt="" />
              <div className="articles__card-block">
                <span className="articles__card-block-state">Статьи</span>
                <p>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </p>
                <ul className="articles__card-date">
                  <li className="articles__card-date-icons">
                    <RxReader className="articles__card-date-icon" />
                    <span className="articles__card-date-read">Читать</span>
                  </li>
                  <span className="articles__card-date-data">01.02.2022</span>
                </ul>
              </div>
            </div>
            <div className="articles__card">
              <img src={articles} alt="" />
              <div className="articles__card-block">
                <span className="articles__card-block-state">Статьи</span>
                <p>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </p>
                <ul className="articles__card-date">
                  <li className="articles__card-date-icons">
                    <RxReader className="articles__card-date-icon" />
                    <span className="articles__card-date-read">Читать</span>
                  </li>
                  <span className="articles__card-date-data">01.02.2022</span>
                </ul>
              </div>
            </div>
            <div className="articles__card">
              <img src={articles} alt="" />
              <div className="articles__card-block">
                <span className="articles__card-block-state">Статьи</span>
                <p>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </p>
                <ul className="articles__card-date">
                  <li className="articles__card-date-icons">
                    <RxReader className="articles__card-date-icon" />
                    <span className="articles__card-date-read">Читать</span>
                  </li>
                  <span className="articles__card-date-data">01.02.2022</span>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
