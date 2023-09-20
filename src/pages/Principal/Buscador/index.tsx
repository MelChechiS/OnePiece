import styles from "../Buscador/Principal.module.scss";
import logo from "../assets/logo.png";

export default function Principal() {
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
      </nav>
    </main>
  );
}
