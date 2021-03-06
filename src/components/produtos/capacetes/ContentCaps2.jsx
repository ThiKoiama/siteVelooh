import styles from "../../../styles/produtos/ContentProdutos.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function ContentCaps2() {
  const [cor, setCor] = useState("AZUL");
  const [foto, setFoto] = useState(
    "/images/produtos/capacetes/capmtb/azul.png"
  );
  const [subfoto, setsubFoto] = useState(
    "/images/produtos/capacetes/capmtb/azul2.png"
  );
  const [subfoto2, setsubFoto2] = useState(
    "/images/produtos/capacetes/capmtb/azul3.png"
  );

  function mudarCor(cor, foto, subfoto, subfoto2) {
    setCor(cor);
    setFoto(foto);
    setsubFoto(subfoto);
    setsubFoto2(subfoto2);
  }
  return (
    <div className={styles.prods}>
      <h1 style={{ fontSize: "3rem", marginTop: "60px", marginLeft: "60px" }}>
        CAPACETES:
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
              <p>CAPACETE MTB LINE {cor}</p>
            </div>
            <div className={styles.cores}>
              <div
                className={styles.azul}
                onClick={() =>
                  mudarCor(
                    "AZUL",
                    "/images/produtos/capacetes/capmtb/azul.png",
                    "/images/produtos/capacetes/capmtb/azul2.png",
                    "/images/produtos/capacetes/capmtb/azul3.png"
                  )
                }
              ></div>
              <div
                className={styles.rosa}
                onClick={() =>
                  mudarCor(
                    "ROSA",
                    "/images/produtos/capacetes/capmtb/rosa.png",
                    "/images/produtos/capacetes/capmtb/rosa2.png",
                    "/images/produtos/capacetes/capmtb/rosa3.png"
                  )
                }
              ></div>
              <div
                className={styles.vermelho}
                onClick={() =>
                  mudarCor(
                    "VERMELHO",
                    "/images/produtos/capacetes/capmtb/vermelho.png",
                    "/images/produtos/capacetes/capmtb/vermelho2.png",
                    "/images/produtos/capacetes/capmtb/vermelho3.png"
                  )
                }
              ></div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
