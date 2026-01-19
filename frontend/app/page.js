export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-xl text-center space-y-6 px-4">
        
        <h1 className="text-5xl font-bold tracking-tight">
          Virex
        </h1>

        <p className="text-gray-400 text-lg">
          Turn long videos into viral short clips
        </p>

        <input
          type="text"
          placeholder="Paste YouTube video link here"
          className="w-full px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <button className="w-full bg-purple-600 hover:bg-purple-700 transition px-4 py-3 rounded-md font-semibold">
          Generate Clips
        </button>

      </div>
    </main>
  );
}
