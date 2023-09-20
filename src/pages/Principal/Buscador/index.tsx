import styles from "../Buscador/Principal.module.scss";
import logo from "../assets/logo.png";

export default function Principal() {
  return (
    <main>
      <nav>
          <img src={logo} alt="Logo de One Piece"></img>
        <header className={styles.header}>
          <div className={styles.header__text}>
            "Apresentando o Anime: One Piece!"
          </div>
          </header>
      </nav>
    </main>
  );
}
