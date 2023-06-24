import React from "react";
import Android from "../../img/android.png";
import Curs from "./Curs";
import MasterClasses from "./MasterClass";

function OurSchool() {
  return (
    <>
      <div id="ourSchool">
        <div className="container">
          <div className="ourSchool">
            <div className="school1">
              <rem>
                Главная / <span style={{ color: "white" }}>О школе</span>
              </rem>
              <h1>О нашей школе:</h1>
              <p>
                Наша платформа — это интенсивная программа <br />
                обучения для тех, кто хочет освоить востребованную <br />
                профессию, войти в IT и зарабатывать больше.
              </p>
              <h1>Наша миссия:</h1>
              <p>
                Сформировать интерес к современным технологиям <br />
                и помочь школьнику определиться с выбором <br />
                будущей специальности.
              </p>
            </div>
            <div className="school2">
              <img src={Android} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Curs/>
      <MasterClasses/>
    </>
  );
}

export default OurSchool;
