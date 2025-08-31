// src/App.jsx
import { useEffect, useState } from "react";

export default function App() {
  const [color, setColor] = useState("olive");

  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = color;
    return () => { document.body.style.backgroundColor = prev; };
  }, [color]);

  return (
    <div className="w-full h-screen">
      {/* Bottom bar fixed and full width */}
      <div className="fixed bottom-0 inset-x-0 px-4 pb-4 z-50">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between gap-3 shadow-lg bg-white/95 backdrop-blur px-4 py-3 rounded-t-2xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-5 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-5 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("#0ea5e9")}
              className="outline-none px-5 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#0ea5e9" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("#111827")}
              className="outline-none px-5 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#111827" }}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
