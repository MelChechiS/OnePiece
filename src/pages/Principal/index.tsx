
import topo from "./assets/topo.png";
import logo from "./assets/logo.png";

export default function Principal() {
  return (
    <main>
      <nav>
          <img src={logo} alt="Logo de One Piece"></img>
        <img src={topo} alt="Topo da Página"></img>
      </nav>
    </main>
  );
}
