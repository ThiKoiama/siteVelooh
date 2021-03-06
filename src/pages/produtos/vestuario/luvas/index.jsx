import Head from "next/head";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Zap from "../../../../components/Zap";
import ProdutosPg from "../../../../components/ProdutosPg";
import Produto from "../../../../components/Produto";

export default function luvas() {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="LUVAS">
        <Produto
          href="/produtos/vestuario/luvas/luvadedovazado"
          titulo="LUVA DE MÃO COM DEDO VAZADO"
          cor1="azulClaro"
          cor2="laranja"
          cor3="rosaclaro"
          cor4="preto"
          cor5="verdeclaro"
          cor6="vermelho"
          img="/images/produtos/vestuario/luva/azul.png"
        />
      </ProdutosPg>
      <Zap />
      <Footer />
    </div>
  );
}
