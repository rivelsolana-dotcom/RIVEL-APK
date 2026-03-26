export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white overflow-hidden">

      {/* LOGO RIVEL */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
          RIVEL
        </h1>
      </div>

      {/* CÍRCULO */}
      <div className="relative flex items-center justify-center">

        {/* círculo animado */}
        <div className="w-72 h-72 rounded-full border border-gray-800 animate-spin-slow"></div>

        {/* ETH */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-blue-500 p-3 rounded-full shadow-lg">
          <img
            src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
            className="w-6"
          />
        </div>

        {/* BTC */}
        <div className="absolute bottom-2 left-4 bg-yellow-500 p-3 rounded-full shadow-lg">
          <img
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            className="w-6"
          />
        </div>

        {/* DOGE */}
        <div className="absolute bottom-2 right-4 bg-yellow-400 p-3 rounded-full shadow-lg">
          🐶
        </div>

        {/* CENTRO */}
        <div className="absolute w-40 h-40 bg-[#0B0F1A] rounded-2xl flex items-center justify-center shadow-inner">
          <span className="text-3xl">💱</span>
        </div>
      </div>

      {/* TEXTO */}
      <div className="text-center mt-12 px-6">
        <h2 className="text-2xl font-bold">
          <span className="text-blue-400">Quick and easy</span><br />
          coin exchange
        </h2>

        <p className="text-gray-400 mt-4">
          Bring your portfolio in keeping with current trends and coin swapping
        </p>
      </div>

      {/* BOTÓN */}
      <button className="mt-10 bg-white text-black px-10 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition">
        Continue →
      </button>

    </main>
  );
}
