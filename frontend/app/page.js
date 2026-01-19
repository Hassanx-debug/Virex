"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleGenerate = async () => {
    if (!url) {
      alert("Please paste a YouTube link first");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/generate-clips`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        }
      );

      const data = await res.json();
      console.log("Backend response:", data);
      alert("YouTube link sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to send link to backend");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-3xl font-bold text-center">Virex</h1>

        <input
          type="text"
          placeholder="Paste YouTube video link"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-3 rounded text-black"
        />

        <button
          onClick={handleGenerate}
          className="w-full bg-purple-600 p-3 rounded hover:bg-purple-700"
        >
          Generate Clips
        </button>
      </div>
    </main>
  );
}
