import s from "./App.module.css";
import { Menu } from "./components/menu";

import cr7 from "/cr7.jpg";
import nature from "/nature.jpg"

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
        <div className={s.section3}> 
          <div className={s.wrapTexts3}>
            <h1 className={s.tituloSection3}>Nature ambiental</h1>
            <p className={s.textSection3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi molestias eum, officia libero debitis voluptatibus? Aut voluptate, magnam, maiores enim aspernatur quae totam eius veniam iusto quaerat ratione minus officia!</p>
            <p className={s.textSection3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eius nostrum sint. </p>
            <p className={s.textSection3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iusto tempora possimus! Modi veritatis minus dolor ad, sed porro repudiandae dicta error voluptatibus expedita maiores. Praesentium perspiciatis vero fuga commodi.</p>
          </div>
          <div className={s.wrapImage3}>
            <img className={s.imgSection3} src={nature} alt="natureza" />
          </div>
        </div>
        <div className={s.section4}>

        </div>
      </div>
    </>
  );
}

export default App;
