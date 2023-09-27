import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import styles from "./Favoritos.module.css";

function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card id="1" titulo="O Procurado" capa="./amongs-us" />
      </section>
    </>
  );
}

export default Favoritos;
