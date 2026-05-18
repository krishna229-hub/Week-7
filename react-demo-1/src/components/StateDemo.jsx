import { useState } from "react";

function StateDemo() {

  const [counter, setCounter] = useState(10);
  const [marks, setMarks] = useState([]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const getMarks = () => {
    return marks;
  };

  const addMarks = () => {
    setMarks([...marks, Math.floor(Math.random() * 100)]);
  };

  const delMarks = () => {
    setMarks(marks.slice(0, -1));
  };

  return (
    <div className="text-center">
      <p className="text-4xl mt-10">Counter: {counter}</p>

      <button onClick={increment} className="bg-blue-500 px-6 mt-5 border-2"  >Increment</button>
      <button onClick={decrement} className="bg-amber-300 px-5 mt-5 border-2">Decrement</button>
      <button onClick={reset} className="bg-red-500 px-5 mt-5 border-2">Reset</button>

      <p className="text-4xl mt-10">Marks List</p>
      <ul className="mt-5 text-2xl">
        {getMarks().map((mark, index) => (
          <li key={index}>{mark}</li>
        ))}
      </ul>

      <button onClick={addMarks} className="bg-green-500 px-6 mt-5 border-2">Add Marks</button>
      <button onClick={delMarks} className="bg-red-500 px-5 mt-5 border-2">Delete Marks</button>
    </div>
  );
}
