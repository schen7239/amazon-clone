import Head from "next/head";
import Banner from "../components/banner";
import Header from "../components/header";
import ProductFeed from "../components/productFeed";

export default function Home({productFeedProducts}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon.com. Spend less. Smile more.</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed productFeedProducts={productFeedProducts} />
      </main>
    </div>
  );
}

export async function getServerSideProps(content) {
  const productFeedProducts = await fetch('https://fakestoreapi.com/products').then(res => res.json());

  return {
    props: {
      productFeedProducts
    }
  }
}