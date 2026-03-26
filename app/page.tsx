import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] flex flex-col items-center justify-center text-white relative overflow-hidden">

      {/* LOGO RIVEL FLOTANTE ARRIBA */}
      <div className="absolute top-10 flex flex-col items-center">
        <Image
          src="/images/rivel.png"
          alt="Rivel"
          width={80}
          height={80}
          className="animate-bounce"
        />
        <span className="text-sm mt-2 text-gray-400">RIVEL</span>
      </div>

      {/* AREA CENTRAL */}
      <div className="relative flex items-center justify-center">

        {/* CÍRCULO GRANDE */}
        <div className="w-[320px] h-[320px] border border-gray-700 rounded-full"></div>

        {/* CÍRCULO INTERNO */}
        <div className="absolute w-[220px] h-[220px] border border-gray-800 rounded-full"></div>

        {/* TELEFONO MOCK */}
        <div className="absolute w-[140px] h-[240px] bg-[#111827] rounded-3xl border border-gray-700 shadow-xl"></div>

        {/* BITCOIN */}
        <div className="absolute left-[-50px] top-[140px] animate-bounce">
          <Image src="/images/btc.png" alt="btc" width={60} height={60} />
        </div>

        {/* ETHEREUM */}
        <div className="absolute top-[-40px] animate-bounce delay-200">
          <Image src="/images/eth.png" alt="eth" width={60} height={60} />
        </div>

        {/* RIVEL FLOTANDO DERECHA */}
        <div className="absolute right-[-50px] top-[140px] animate-bounce delay-500">
          <Image src="/images/rivel.png" alt="rivel" width={60} height={60} />
        </div>

      </div>

      {/* TEXTO */}
      <div className="mt-10 text-center px-6">
        <h1 className="text-2xl font-semibold">
          <span className="text-blue-400">Quick and easy</span><br />
          coin exchange
        </h1>

        <p className="text-gray-400 mt-3 text-sm">
          Bring your portfolio in keeping with<br />
          current trends and coin swapping
        </p>
      </div>

      {/* BOTÓN */}
      <button className="mt-8 px-10 py-3 bg-white text-black rounded-full font-semibold shadow-lg">
        Continue →
      </button>

    </main>
  );
}
