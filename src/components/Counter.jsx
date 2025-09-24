import { createSignal } from 'solid-js';

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <div class="my-4 p-4 border rounded-lg">
      <p>You clicked {count()} times</p>
      <button
        class="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count() + 1)}
      >
        Click me
      </button>
    </div>
  );
}