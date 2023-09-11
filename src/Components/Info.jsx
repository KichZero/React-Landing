import React, { useState } from "react";
import "../Style/Info.css";
import sample from "../Style/Video/office.mp4";
import "animate.css"; // Подключите библиотеку animate.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersBetweenLines, faFileSignature, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const InfoBlock = () => {
  const [animateIcons, setAnimateIcons] = useState(false);

  const handleIconsInView = (inView) => {
    if (inView) {
      setAnimateIcons(true);
    }
  };

  return (
    <div className="info-block">
      <div className="video-background">
        <div className="text-backgr">
          <h1>ДЕЛАЕМ ПРОЕКТЫ ДЛЯ ЛЮДЕЙ</h1>
          <p>
            Более 50 довольных заказчиков, за это время мы сделали легкие
            проекты и невероятно сложные
          </p>
          {/* button  */}
          <div className="box-1">
            <a className="link" href="https://t.me/pybytes" target="_blank" rel="noopener noreferrer">
              <div className="btn btn-one">
                <span>Оставить заявку</span>
              </div>
            </a>
          </div>
        </div>

        <video className="videoTag" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
      </div>

      <div className={`textcols4-wrapper ${animateIcons ? "animate__animated animate__bounce" : ""}`} ref={handleIconsInView}>
        <div className="textcols4">
          <div className="textcols4-item">
            <FontAwesomeIcon icon={faUsersBetweenLines} id="ico" />
            <b>982</b>
            <p className="pinf">количество пользователей</p>
          </div>
          <div className="textcols4-item">
            <FontAwesomeIcon icon={faFileSignature} id="ico" />
            <b>721</b>
            <p className="pinf">количество заказов</p>
          </div>
          <div className="textcols4-item">
            <FontAwesomeIcon icon={faPeopleGroup} id="ico" />
            <b>15</b>
            <p className="pinf">количество сотрудников</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
