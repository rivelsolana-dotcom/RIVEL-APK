import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] flex flex-col items-center justify-center text-white relative overflow-hidden">

      {/* LOGO RIVEL ARRIBA */}
      <div className="absolute top-10 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center shadow-2xl">
          <Image src="/images/rivel.png" alt="rivel" width={60} height={60} />
        </div>
      </div>

      {/* CONTENEDOR CENTRAL */}
      <div className="relative flex items-center justify-center">

        {/* CÍRCULO GRANDE */}
        <div className="w-[320px] h-[320px] rounded-full border border-gray-700"></div>

        {/* CÍRCULO INTERNO */}
        <div className="absolute w-[220px] h-[220px] rounded-full border border-gray-800"></div>

        {/* TELÉFONO */}
        <div className="absolute w-[150px] h-[260px] bg-[#111827] rounded-[30px] border border-gray-700 shadow-2xl"></div>

        {/* BITCOIN */}
        <div className="absolute left-[-60px] top-[140px]">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl">
            <Image src="/images/btc.png" alt="btc" width={34} height={34} />
          </div>
        </div>

        {/* ETHEREUM (nuevo estilo limpio) */}
        <div className="absolute top-[-50px]">
          <div className="w-16 h-16 bg-[#3C3C3D] rounded-full flex items-center justify-center shadow-2xl">
            <Image src="/images/eth.png" alt="eth" width={30} height={30} />
          </div>
        </div>

        {/* RIVEL */}
        <div className="absolute right-[-60px] top-[140px]">
          <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl">
            <Image src="/images/rivel.png" alt="rivel" width={30} height={30} />
          </div>
        </div>

      </div>

      {/* TEXTO */}
      <div className="mt-12 text-center px-6">
        <h1 className="text-2xl font-semibold leading-tight">
          <span className="text-blue-400">Quick and easy</span><br />
          coin exchange
        </h1>

        <p className="text-gray-400 mt-3 text-sm">
          Bring your portfolio in keeping with<br />
          current trends and coin swapping
        </p>
      </div>

      {/* BOTÓN */}
      <button className="mt-8 px-10 py-3 bg-white text-black rounded-full font-semibold shadow-xl active:scale-95 transition">
        Continue →
      </button>

    </main>
  );
}
