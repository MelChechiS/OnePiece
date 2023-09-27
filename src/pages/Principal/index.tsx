import styles from "./Principal.module.scss";
import logo from "../Principal/assets/logo.png";
import { useState } from 'react';
import  Filtros from './Filtros';
import Buscador from "./Buscador";

export default function Principal() {
  const [busca, setBusca] = useState("");
  return (
    <main>
      <nav>
        <div className={styles.logo}>
        <img src={logo} alt="Logo de One Piece"></img>
        </div>

        <header className={styles.header}>
          <div className={styles.header__text}>
            "One Piece!"
          </div>
          </header>

          <section>
            <h3>Personagens</h3>
            <Buscador busca={busca} setBusca={setBusca}/>
            <div className={styles.principal__filtros}>
              <Filtros/>
            </div>
          </section>
      </nav>
    </main>
  );
}
