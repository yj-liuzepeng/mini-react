// js pragma
/** @jsx CReact.createElement */
import CReact from "./core/React.js";
let count = 10;
let props = { id: "121211212121212121" };
function Counter() {
  function handleClick() {
    count++;
    props = {};
    CReact.update();
  }
  return (
    <div {...props}>
      <div>count: {count}</div>
      <button onClick={handleClick}>按钮</button>
    </div>
  );
}

function App() {
  return (
    <div>
      hi-mini-react
      <Counter></Counter>
    </div>
  );
}

// 通过vite把jsx转换成对象
export default App;
