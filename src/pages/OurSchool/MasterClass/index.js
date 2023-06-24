import React from "react";
import { Link } from "react-router-dom";

function MasterClasses() {
  return (
    <div id="masterclasses">
      <div className="container">
        <div className="masterclasses">
          <h1>Мастер-классы</h1>
          {/* <Link to={"/reactiv"}> */}
            <div className="masterclasses--bloc">
              <div className="masterclasses1">
                <h2>
                  Реактивное программирование на Java: как, зачем и стоит ли?{" "}
                </h2>
                <p>
                  Программирования появилась сравнительно недавно, лет 10 назад.
                  Что вызвало популярность этого <br />
                  относительно нового подхода и почему сейчас он в тренде,
                  рассказал на конференции РИТ++ ...
                </p>
              </div>
              <div className="masterclasses2">
                <h2>
                  Реактивное программирование на Java: как, зачем и стоит ли?{" "}
                </h2>
                <p>
                  Программирования появилась сравнительно недавно, лет 10 назад.
                  Что вызвало популярность этого <br />
                  относительно нового подхода и почему сейчас он в тренде,
                  рассказал на конференции РИТ++ ...
                </p>
              </div>
              <div className="masterclasses3">
                <h2>
                  Реактивное программирование на Java: как, зачем и стоит ли?{" "}
                </h2>
                <p>
                  Программирования появилась сравнительно недавно, лет 10 назад.
                  Что вызвало популярность этого <br />
                  относительно нового подхода и почему сейчас он в тренде,
                  рассказал на конференции РИТ++ ...
                </p>
              </div>
            </div>
          {/* </Link> */}
          <center>
            <Link to={"/master"}>
              <button>Все мастер классы</button>
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
}

export default MasterClasses;
