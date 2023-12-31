import React from "react";
import comanda from '../../img/comanda.png'
import comanda2 from '../../img/comanda2.png'
import sertificate from '../../img/sertificate.png'
import sertifyadap from '../../img/sertificateAdap.png'
import Otzyvy from "../../components/Otzyvy";
function AboutUs() {
  return (
    <>
       <div id="about">
      <div className="container">
        <h3>
          Главная / <span>О нас</span>
        </h3>
        <div className="about">
          <div className="about__text">
            <h1>О нас</h1>
            <p>
              Курсы IT-профессий Motion Web была основана в 2021-ом году в
              Бишкеке с целью дать возможность каждому человеку, даже без опыта
              в технологиях, гарантированно освоить IT-профессию.
            </p>
            <p>
              Форма обучения - онлайн, с применением электронного обучения и
              дистанционных образовательных технологий на образовательной
              платформе Moodle и прямые эфиры с преподавателем. 154
              академических часа трудоёмкости учебной деятельности отведено
              практическим занятиям и выполнению практических заданий.
            </p>
          </div>
          <div className="about__img">
            <img src={comanda} alt="" />
            <img src={comanda2} alt="" />
          </div>
          <div className="about__sertificate">
            <h1>Сертификат</h1>
            <p>По окончании обучения выдается онлайн сертификат.</p>
            <img src={sertificate} alt="" />
          </div>
          <div className="about__sertifiadap">
            <h1>Сертификат</h1>
            <p>
              По окончании обучения выдается сертификат государственного образца
              на двух языках с лицензией Министерства образования КР.
            </p>
            <img src={sertifyadap} alt="" />
          </div>
        </div>
      </div>
    </div>
    <Otzyvy/>
    </>
  );
}

export default AboutUs;
