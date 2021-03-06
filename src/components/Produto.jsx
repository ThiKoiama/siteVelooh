import Link from "next/link";
import styles from "../styles/Produto.module.css";
export default function Produto(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
  
      <Link href={props.href}>
        <div className={styles.prodMold}>
          <img src={props.img} alt="Produto" className={styles.imgProd} />
          <div className={styles.contentMold}>
          <div className={styles.cores}>
            <div className={styles[props.cor1]}></div>
            <div className={styles[props.cor2]}></div>
            <div className={styles[props.cor3]}></div>
            <div className={styles[props.cor4]}></div>
            <div className={styles[props.cor5]}></div>
            <div className={styles[props.cor6]}></div>
            <div className={styles[props.cor7]}></div>
            <div className={styles[props.cor8]}></div>
            <div className={styles[props.cor9]}></div>
            <div className={styles[props.cor10]}></div>
          </div>
          <h3 className={styles.titulo}>{props.titulo}</h3>
        </div>
        </div>
      </Link>
    </div>
  );
}
