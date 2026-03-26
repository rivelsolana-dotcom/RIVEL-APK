export default function Home() {
  const coins = [
    { name: "Bitcoin", symbol: "BTC", price: "$15,633", color: "text-yellow-400" },
    { name: "Ethereum", symbol: "ETH", price: "$20,713", color: "text-blue-400" },
    { name: "Tether", symbol: "USDT", price: "$100", color: "text-green-400" },
    { name: "Dogecoin", symbol: "DOGE", price: "$441", color: "text-yellow-300" },
  ];

  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white flex justify-center items-center">
      <div className="w-[360px] bg-[#111827] rounded-2xl p-5 shadow-xl">

        {/* Header */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm">My Wallet</p>
          <h1 className="text-3xl font-bold">$46,142.45</h1>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button className="bg-gray-800 p-3 rounded-lg">Send</button>
          <button className="bg-gray-800 p-3 rounded-lg">Swap</button>
          <button className="bg-gray-800 p-3 rounded-lg">Receive</button>
        </div>

        {/* Portfolio */}
        <div>
          <h2 className="text-lg mb-3">Your Portfolio</h2>

          {coins.map((coin, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#1F2937] p-3 rounded-lg mb-2"
            >
              <div>
                <p className={`font-bold ${coin.color}`}>{coin.name}</p>
                <p className="text-gray-400 text-sm">{coin.symbol}</p>
              </div>

              <p className="font-bold">{coin.price}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
