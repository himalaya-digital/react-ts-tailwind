import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="text-3xl underline">Realtime Order System</p>
      <button
        className="mt-2 rounded bg-indigo-500 px-4 py-1 text-white"
        onClick={(e) => setCount(count + 1)}
      >
        Click Me {count}
      </button>
    </div>
  );
}

export default App;
