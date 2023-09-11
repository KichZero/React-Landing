import React, { useState } from "react";
import "../Style/Work.css";
import "animate.css";
import { useInView } from 'react-intersection-observer';

const Work = () => {
  const [ref1, inView1] = useInView({
    // triggerOnce: false, // Уберите triggerOnce для отслеживания каждого входа
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    // triggerOnce: false, // Уберите triggerOnce для отслеживания каждого входа
    threshold: 0.1,
  });

  const [ref3, inView3] = useInView({
    // triggerOnce: false, // Уберите triggerOnce для отслеживания каждого входа
    threshold: 0.1,
  });

  // Состояния анимации для каждого блока
  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);

  // Обработчики видимости для каждого блока
  const handleInView1 = (inView) => {
    if (inView) {
      setAnimate1(true);
    }
  };

  const handleInView2 = (inView) => {
    if (inView) {
      setAnimate2(true);
    }
  };

  const handleInView3 = (inView) => {
    if (inView) {
      setAnimate3(true);
    }
  };


  return (
    /* первый блок с анимацией */
    <div className="blockcont2">
    <div className={`cont ${inView1 || inView2 || inView3 ? "animate__animated animate__fadeIn" : ""}`}>
    <div className={`infelem ${inView1 ? "animate__animated animate__fadeIn" : ""}`} ref={ref1}>
      <div className="inftext">
          <h1>Мобильное приложение Bemol</h1>
          <br/>
          <p>Мы в компании ilab.md разработали мобильное приложение для сети заправок Bemol. Это удобная программа для клиентов компании, которые являются обладателями карт на топливо. В приложении можно отслеживать расход топлива, устанавливать ограничения, формировать необходимые отчеты.</p>
          <br/>
          <p>Мы предусмотрели двустороннюю синхронизацию информации, то есть приложение получает необходимые данные для отображения отчетов из программы клиента, а при изменении пользователем каких-либо настроек передает их.</p>
          <br/>
          <p>При разработке дизайна приложения мы уделили внимание сохранению узнаваемого фирменного стиля и грамотному расположению элементов, поэтому клиентам компании Bemol легко и удобно пользоваться новым приложением.</p>
        </div>
        <div className={`elemimg ${inView1 ? "animate__animated animate__backInRight" : ""}`} ref={ref1}>
          <img
            className="animate__animated animate__backInRight"
            width="400"
            height="300"
            src="https://foni.club/uploads/posts/2023-01/1673799833_foni-club-p-kartinki-na-rabochii-stol-programmirovanie-2.jpg"
            alt="img1"
          />
        </div>
      </div>

      {/* Второй блок с анимацией */}
       <div className={`infelem ${inView2 ? "animate__animated animate__fadeIn" : ""}`} ref={ref2}>
        <div className={`elemimg2 ${inView2 ? "animate__animated animate__backInLeft" : ""}`} ref={ref2}>
          <img
            className="animate__animated animate__backInLeft"
            width="400"
            height="300"
            src="https://inlooxcdn.azureedge.net/var/corporate_site/storage/images/media/images/blog/header-image-choosing-the-right-team-members-for-a-project/1760072-1-eng-GB/header-image-choosing-the-right-team-members-for-a-project.png"
            alt="img2"
          />
        </div>
        <div className="inftext2">
          <h1>Мобильное приложение Bemol</h1>
          <br/>
          <p>Мы в компании ilab.md разработали мобильное приложение для сети заправок Bemol. Это удобная программа для клиентов компании, которые являются обладателями карт на топливо. В приложении можно отслеживать расход топлива, устанавливать ограничения, формировать необходимые отчеты.</p>
          <br/>
          <p>Мы предусмотрели двустороннюю синхронизацию информации, то есть приложение получает необходимые данные для отображения отчетов из программы клиента, а при изменении пользователем каких-либо настроек передает их.</p>
          <br/>
          <p>При разработке дизайна приложения мы уделили внимание сохранению узнаваемого фирменного стиля и грамотному расположению элементов, поэтому клиентам компании Bemol легко и удобно пользоваться новым приложением.</p>
        </div>
      </div>

      {/* Третий блок с анимацией */}
      <div className={`infelem ${inView3 ? "animate__animated animate__fadeIn" : ""}`} ref={ref3}>
        <div className="inftext">
          <h1>Мобильное приложение Bemol</h1>
          <br />
          <p>Мы в компании ilab.md разработали мобильное приложение для сети заправок Bemol. Это удобная программа для клиентов компании, которые являются обладателями карт на топливо. В приложении можно отслеживать расход топлива, устанавливать ограничения, формировать необходимые отчеты.</p>
          <br/>
          <p>Мы предусмотрели двустороннюю синхронизацию информации, то есть приложение получает необходимые данные для отображения отчетов из программы клиента, а при изменении пользователем каких-либо настроек передает их.</p>
          <br/>
          <p>При разработке дизайна приложения мы уделили внимание сохранению узнаваемого фирменного стиля и грамотному расположению элементов, поэтому клиентам компании Bemol легко и удобно пользоваться новым приложением.</p>
        </div>
        <div className={`elemimg ${inView3 ? "animate__animated animate__backInRight" : ""}`} ref={ref3}>
          <img
            width="400"
            height="300"
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="img3"
          />
        </div>
      </div>

      {/* Кнопка */}
      <div className="buttontwo">
        <a className="btnn" href="https://t.me/pybytes" target="_blank" rel="noopener noreferrer">
          <span>Оставить заявку</span>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Work;
