import React from "react";
import articles from "../../../img/Articles.png";
import { RxReader } from "react-icons/rx";
import { Link } from "react-router-dom";
function Articles() {
  return (
    <div id="articles">
      <div className="container">
        <div className="articles">
          <h1>Последние статьи</h1>
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
          <div className="articles__btn">
            <Link to={"/more"}>
              <button className="articles__btn-link">Показать больше</button>
            </Link>
          </div>
          <div className="articles__oforms">
            <div className="articles__oform">
              <div className="articles__oform-text">
                <h2>Подпишитесь сейчас за 19,00 $ / мес</h2>
                <p>
                  И получите доступ к материалам и кейсам, а также к новым
                  мастер-классам
                </p>
              </div>
              <div className="articles__oform-btn">
                <Link>
                  <button>Оформить подписку</button>
                </Link>
                <span>Подробнее о пакетах </span>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
