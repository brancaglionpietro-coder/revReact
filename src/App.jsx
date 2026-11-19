import s from "./App.module.css";
import { Menu } from "./components/menu";

import cr7 from "/cr7.jpg";

function App() {
  return (
    <>
      <Menu />
      <div className={s.wrapHome}>
        <div className={s.section1}>
          <div className={s.wrapImage}>
            <img className={s.imgSection1} src={cr7} alt="cr7" />
          </div>
          <div className={s.wrapTexts}>
            <h1 className={s.tituloSection1}>Título da página</h1>
            <p className={s.textSection1}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi a
              saepe, tempora reiciendis quis repellendus pariatur illo soluta
              ipsum! Possimus eligendi fuga ipsa aperiam qui. Ipsum similique
              dolor quis eius?
            </p>
            <button className={s.btnSection1}>CLIQUE</button>
          </div>
        </div>
        <div className={s.section2}>
          <iframe
            src=""
            frameborder="0"
            className={s.vid}
            src="https://www.youtube.com/embed/mmeLCAP74KA?si=RKc3rXfFQH6jJVIJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
