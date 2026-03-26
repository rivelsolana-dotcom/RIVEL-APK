export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-purple-500">
        RIVEL WALLET 🚀
      </h1>

      <p className="mt-4 text-gray-400">
        Tu plataforma crypto futurista
      </p>

      <div className="mt-10 p-6 bg-gray-900 rounded-xl shadow-lg w-80 text-center">
        <p className="text-gray-400">Balance</p>
        <h2 className="text-2xl font-bold">$0.00</h2>

        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-purple-600 px-4 py-2 rounded">
            Send
          </button>
          <button className="bg-blue-600 px-4 py-2 rounded">
            Swap
          </button>
        </div>
      </div>
    </main>
  );
}
