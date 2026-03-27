import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] flex flex-col items-center justify-center text-white relative overflow-hidden">

      {/* LOGO RIVEL ARRIBA */}
      <div className="absolute top-10">
        <Image src="/images/rivel.png" alt="rivel" width={80} height={80} />
      </div>

      {/* CÍRCULO */}
      <div className="relative flex items-center justify-center">

        {/* CÍRCULO GRANDE */}
        <div className="w-[320px] h-[320px] border border-gray-700 rounded-full"></div>

        {/* CÍRCULO INTERNO */}
        <div className="absolute w-[220px] h-[220px] border border-gray-800 rounded-full"></div>

        {/* TELÉFONO */}
        <div className="absolute w-[150px] h-[260px] bg-[#111827] rounded-[30px] border border-gray-700 shadow-xl"></div>

        {/* ORBITAS */}
        <div className="absolute w-[320px] h-[320px]">

          {/* BITCOIN */}
          <div className="orbit">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-xl -translate-x-1/2 -translate-y-1/2">
              <img src="/images/btc.png" className="w-8 h-8" />
            </div>
          </div>

          {/* ETH */}
          <div className="orbit delay1">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center shadow-xl -translate-x-1/2 -translate-y-1/2">
              <img src="/images/eth.png" className="w-8 h-8" />
            </div>
          </div>

          {/* RIVEL */}
          <div className="orbit delay2">
            <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-full flex items-center justify-center shadow-xl -translate-x-1/2 -translate-y-1/2">
              <img src="/images/rivel.png" className="w-8 h-8" />
            </div>
          </div>

        </div>

      </div>

      {/* TEXTO */}
      <div className="mt-12 text-center px-6">
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
