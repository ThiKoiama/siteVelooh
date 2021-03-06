import Head from "next/head";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Zap from "../../../../components/Zap";
import ProdutosPg from "../../../../components/ProdutosPg";
import Produto from "../../../../components/Produto";

export default function bandanas() {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <Head>
        <title>Velooh</title>
        <meta name="description" content="Velooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ProdutosPg title="BANDANAS">
        <Produto
          href="/produtos/vestuario/bandanas/ello"
          titulo="BANDANA ELLO"
          cor1="azulClaro"
          cor2="cinza"
          cor3="rosa"
          cor4="verdeclaro"
          cor5="vermelho"
          img="/images/produtos/vestuario/bandana/elloazul.png"
        />
        <Produto
          href="/produtos/vestuario/bandanas/quasar"
          titulo="BANDANA QUASAR"
          cor1="azulrosa"
          cor2="azulrosa"
          cor3="rosrox"
          cor4="ptrosa"
          cor5="ptverdepiscina"
          img="/images/produtos/vestuario/bandana/quasarazulrosa1.png"
        />
      </ProdutosPg>
      <Zap />
      <Footer />
    </div>
  );
}
