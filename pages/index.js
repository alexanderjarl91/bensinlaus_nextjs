import Head from "next/head";
import Tabletop from "tabletop";

//components
import Navbar from "../components/Navbar";
import Carousel from "../components/landing-components/Carousel";
import CarSlider from "../components/landing-components/CarSlider";
import Ferlid from "../components/landing-components/Ferlid";
import BlogSlider from "../components/landing-components/BlogSlider";
import Umsagnir from "../components/landing-components/Umsagnir";
import Bilaleitin from "../components/landing-components/Bilaleitin";
import Footer from "../components/Footer";

export default function Home({ serverData }) {
  return (
    <div>
      <Head>
        <title>Bensínlaus | Rafbílar | Ísland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="body">
        <Carousel />
        <Bilaleitin />
        <Ferlid />
        <CarSlider title="NÝIR BÍLAR" serverData={serverData} />
        <Umsagnir />
        <BlogSlider />
        <Footer />
      </div>
    </div>
  );
}

//FETCH DATA
export async function getStaticProps() {
  const serverData = await Tabletop.init({
    key: process.env.SHEETS_LINK,
  }).then((docs) => docs["Dealer Portal LIVE"].elements);

  return {
    props: { serverData },
    revalidate: 1800,
  };
}
