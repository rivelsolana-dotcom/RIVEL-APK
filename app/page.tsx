export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] flex flex-col items-center justify-center text-white relative overflow-hidden">

      {/* LOGO RIVEL FLOTANTE */}
      <div className="absolute top-10 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 blur-xl opacity-70 animate-pulse"></div>

      {/* CIRCULO GRANDE */}
      <div className="relative flex items-center justify-center">

        {/* círculo externo */}
        <div className="w-[320px] h-[320px] border border-gray-700 rounded-full animate-spin-slow"></div>

        {/* círculo interno */}
        <div className="absolute w-[220px] h-[220px] border border-gray-800 rounded-full"></div>

        {/* "telefono" mock */}
        <div className="absolute w-[140px] h-[240px] bg-[#111827] rounded-3xl shadow-xl border border-gray-700"></div>

        {/* BTC */}
        <div className="absolute left-[-40px] top-[140px] w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold shadow-lg animate-bounce">
          ₿
        </div>

        {/* ETH */}
        <div className="absolute top-[-30px] w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-xl shadow-lg animate-bounce delay-200">
          ♦
        </div>

        {/* DOGE */}
        <div className="absolute right-[-40px] top-[140px] w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-xl shadow-lg animate-bounce delay-500">
          Ð
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

      {/* BOTON */}
      <button className="mt-8 px-10 py-3 bg-white text-black rounded-full font-semibold shadow-lg">
        Continue →
      </button>

    </main>
  );
}
