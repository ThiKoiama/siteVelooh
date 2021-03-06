import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Zap from "../../../components/Zap";
import ProdutosPg from "../../../components/ProdutosPg";
import Produto from "../../../components/Produto";

export default function indexAros() {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="AROS">
        <Produto
          href="/produtos/aros/aroaero"
          titulo="ARO AERO"
          cor1="azulescuro"
          cor2="branco"
          cor3="polido"
          cor4="preto"
          cor5="rosaclaro"
          cor6="bege"
          cor7="marrom"
          img="/images/produtos/aros/aero/azul.png"
        />
        <Produto
          href="/produtos/aros/aero2"
          titulo="ARO AERO DISCO PRETO C/ADESIVO"
          cor1="azulClaro"
          cor2="amarelo"
          cor3="cinza"
          cor4="laranja"
          cor5="polido"
          cor6="rosa"
          cor7="verde"
          cor8="vermelho"
          cor9="grafite"
          img="/images/produtos/aros/adesivo/azul.png"
        />
        <Produto
          href="/produtos/aros/vision"
          titulo="ARO VISION"
          cor1="verdepiscina"
          cor2="laranja"
          cor3="rosa"
          cor4="verdeclaro"
          cor5="amarelo"
          img="/images/produtos/aros/vision/vde2.jpg"
        />
        <Produto
          href="/produtos/aros/aeroneon"
          titulo="ARO AERO NEON"
          cor1="laranja"
          cor2="rosa"
          cor3="verdeclaro"
          cor4="amarelo"
          img="/images/produtos/aros/neon/laranja.png"
        />
        <Produto
          href="/produtos/aros/aero2cubo"
          titulo="ARO AERO DISCO PRETO C/CUBO"
          cor1="laranja"
          cor2="rosa"
          cor3="verde"
          cor4="amarelo"
          img="/images/produtos/aros/aerocubo/laranja.png"
        />
        <Produto
          href="/produtos/aros/dh"
          titulo="ARO DH"
          cor1="preto"
          cor2="branco"
          cor3="preto"
          cor4="branco"
          img="/images/produtos/aros/dh/pto.jpg"
        />
      </ProdutosPg>
      <Zap />
      <Footer />
    </div>
  );
}
