import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);              // numeric length
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  // Generate password from selected pools
  const generate = useCallback(() => {
    let pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) pool += "0123456789";
    // Printable ASCII specials (no space) — escape " and \
    if (includeChars) pool += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    let out = "";
    const n = Number(length);
    for (let i = 0; i < n; i++) {
      const idx = Math.floor(Math.random() * pool.length); // 0..len-1
      out += pool.charAt(idx);
    }
    setPassword(out);
  }, [length, includeNumbers, includeChars]); // depend on inputs only

  // Regenerate whenever inputs change
  useEffect(() => {
    generate();
  }, [generate]); // safe pattern: depend on the memoized callback

  const copy = useCallback(() => {
    inputRef.current?.select();
    inputRef.current?.setSelectionRange(0, 999);
    navigator.clipboard.writeText(password);
  }, [password]);

  return (
    // Full viewport and centered
    <div className="min-h-screen w-screen grid place-items-center bg-slate-900 p-4">
      <div className="w-full max-w-md shadow-md rounded-lg px-4 py-6 bg-slate-700">
        <h1 className="text-white text-center text-3xl sm:text-4xl mb-5">
          Password Generator
        </h1>

        <div className="flex bg-white rounded-lg overflow-hidden shadow mb-4 text-black">
          <input
            ref={inputRef}
            type="text"
            readOnly
            value={password}
            placeholder="password"
            className="w-full outline-none py-2 px-3"
          />
          <button
            onClick={copy}
            className="px-3 py-2 bg-blue-700 hover:bg-blue-600 text-white shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="space-y-5 text-white">
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="flex-1 cursor-pointer accent-sky-400"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <span>Length: {length}</span>
          </div>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2" htmlFor="numbers">
              <input
                id="numbers"
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers((v) => !v)}
              />
              Numbers
            </label>

            <label className="flex items-center gap-2" htmlFor="chars">
              <input
                id="chars"
                type="checkbox"
                checked={includeChars}
                onChange={() => setIncludeChars((v) => !v)}
              />
              Characters
            </label>
          </div>

          <div className="flex justify-end">
            <button
              onClick={generate}
              className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white"
            >
              Regenerate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// ...rest of App.jsx above

export default App;
