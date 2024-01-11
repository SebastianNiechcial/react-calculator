import { useState } from "react";

let position = 0;

function App() {
  const [number, setNumber] = useState("");

  function takeNumber(number) {
    setNumber(number * 10 ** position + 1);
  }

  return (
    <>
      <section className="border rounded">
        <div className="flex justify-between">
          <p className="border rounded text-white">Wynik: </p>
          <p className=" text-white">{number}</p>
        </div>
        <section className="grid grid-rows-5 grid-cols-7">
          <button className="border rounded text-white ">Rad</button>
          <button className="border rounded text-white ">Deg</button>
          <button className="border rounded text-white">x!</button>
          <button className="border rounded text-white">(</button>
          <button className="border rounded text-white">)</button>
          <button className="border rounded text-white">%</button>
          <button className="border rounded text-white">AC</button>

          <button className="border rounded text-white ">Inv</button>
          <button className="border rounded text-white ">sin</button>
          <button className="border rounded text-white">In</button>
          <button className="border rounded text-white">7</button>
          <button className="border rounded text-white">8</button>
          <button className="border rounded text-white">9</button>
          <button className="border rounded text-white">÷</button>

          <button className="border rounded text-white ">π</button>
          <button className="border rounded text-white ">cos</button>
          <button className="border rounded text-white">log</button>
          <button className="border rounded text-white">4</button>
          <button className="border rounded text-white">5</button>
          <button className="border rounded text-white">6</button>
          <button className="border rounded text-white">x</button>

          <button className="border rounded text-white ">e</button>
          <button className="border rounded text-white ">tan</button>
          <button className="border rounded text-white">√</button>
          <button
            onClick={() => {
              takeNumber(1);
              position += 1;
            }}
            className="border rounded text-white"
          >
            1
          </button>
          <button className="border rounded text-white">2</button>
          <button className="border rounded text-white">3</button>
          <button className="border rounded text-white">-</button>

          <button className="border rounded text-white ">Ans</button>
          <button className="border rounded text-white ">EXP</button>
          <button className="border rounded text-white">
            x <sup>y</sup>
          </button>
          <button className="border rounded text-white">0</button>
          <button className="border rounded text-white">.</button>
          <button className="border rounded text-white">=</button>
          <button className="border rounded text-white">+</button>
        </section>
      </section>
    </>
  );
}

export default App;
