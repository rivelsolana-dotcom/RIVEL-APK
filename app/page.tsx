export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] flex flex-col items-center justify-center text-white">

      {/* Círculo animado */}
      <div className="relative flex items-center justify-center mb-10">

        <div className="w-64 h-64 rounded-full border border-gray-700 animate-spin-slow"></div>

        {/* Monedas */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-500 p-3 rounded-full">
          ETH
        </div>

        <div className="absolute bottom-0 left-0 bg-yellow-500 p-3 rounded-full">
          BTC
        </div>

        <div className="absolute bottom-0 right-0 bg-yellow-300 p-3 rounded-full">
          DOGE
        </div>

        {/* Centro */}
        <div className="absolute bg-[#111827] w-32 h-32 rounded-xl flex items-center justify-center">
          💰
        </div>
      </div>

      {/* Texto */}
      <div className="text-center px-6">
        <h1 className="text-2xl font-bold">
          <span className="text-blue-400">Quick and easy</span><br />
          coin exchange
        </h1>

        <p className="text-gray-400 mt-4">
          Bring your portfolio in keeping with current trends and coin swapping
        </p>
      </div>

      {/* Botón */}
      <button className="mt-10 bg-white text-black px-8 py-3 rounded-full font-bold">
        Continue →
      </button>

    </main>
  );
}
