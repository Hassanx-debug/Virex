"use client";

export default function Home() {
  const handleGenerate = async () => {
    console.log("clicked");

    const res = await fetch("http://localhost:8000");
    const data = await res.json();

    console.log("DATA FROM BACKEND:", data);
    alert("SUCCESS: backend connected");
  };

  return (
    <main style={{ background: "black", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button
        onClick={handleGenerate}
        style={{ padding: "20px", fontSize: "18px", cursor: "pointer" }}
      >
        Generate Clips
      </button>
    </main>
  );
}
