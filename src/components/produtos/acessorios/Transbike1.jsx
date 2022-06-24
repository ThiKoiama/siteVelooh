import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function Transbike1() {
  const [foto, setFoto] = useState("/images/produtos/acessorios/0233.png");
  const [subfoto, setsubFoto] = useState(
    "/images/produtos/acessorios/0233(4).png"
  );
  const [subfoto2, setsubFoto2] = useState(
    "/images/produtos/acessorios/0233.jpg"
  );
  const [subfoto3, setsubFoto3] = useState(
    "/images/produtos/acessorios/0233.png"
  );

  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
        ACESSÓRIOS:
      </h1>
      <div className={styles.produtos}>
        <div className={styles.produto}>
          <div className={styles.Moldfoto}>
            <Zoom>
              <img src={foto} alt="Produto" className={styles.imgProd} />
            </Zoom>
          </div>
          <div className={styles.lateral}>
            <div className={styles.texto}>
              <p>TRANSBIKE ENGATE BOLA 3 BIKES C/ ABRACADEIRA</p>
            </div>

            <div className={styles.subfotos}>
              <div
                onClick={() => setFoto(subfoto)}
                className={styles.Moldfoto2}
              >
                <img src={subfoto} alt="Produto" className={styles.imgProd2} />
              </div>
              <div
                onClick={() => setFoto(subfoto2)}
                className={styles.Moldfoto2}
              >
                <img src={subfoto2} className={styles.imgProd2} />
              </div>
              <div
                onClick={() => setFoto(subfoto3)}
                className={styles.Moldfoto2}
              >
                <img src={subfoto3} className={styles.imgProd2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
