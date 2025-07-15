import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <main className="text-center mt-40">
        <Image
          src="/logo/azumbo.png"
          alt="Azumbo logo"
          width={200}
          height={200}
          className="mx-auto mb-8"
        />
        <h1 className="text-6xl font-bold text-cyan-400">Azumbo Games</h1>
        <p className="text-xl mt-4 text-white">Вирусные игры с итальянской душой 🇮🇹</p>
      </main>
    </Layout>
  );
}
