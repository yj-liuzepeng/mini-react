// // v1
// // const dom = document.createElement("div");
// // dom.id = "app";
// // document.querySelector("#root").append(dom);

// // const textNode = document.createTextNode("");
// // textNode.nodeValue = "app";
// // dom.append(textNode);

// // v2 react --> vdom --> js object
// // type props children
// // const textEl = {
// //   type: "TEXT_ELEMENT",
// //   props: {
// //     nodeValue: "app",
// //     children: [],
// //   },
// // };

// // const el = {
// //   type: "div",
// //   props: {
// //     id: "app",
// //     children: [textEl],
// //   },
// // };

// // 动态创建
// function createTextNode(text) {
//   return {
//     type: "TEXT_ELEMENT",
//     props: {
//       nodeValue: text,
//       children: [],
//     },
//   };
// }

// function createElement(type, props, ...children) {
//   return {
//     type,
//     props: {
//       ...props,
//       children: children.map((child) => {
//         return typeof child === "string" ? createTextNode(child) : child;
//       }),
//     },
//   };
// }

// // const textEl = createTextNode("app");
// // const App = createElement("div", { id: "app" }, textEl);

// // const dom = document.createElement(App.type);
// // dom.id = App.props.id;
// // document.querySelector("#root").append(dom);

// // const textNode = document.createTextNode("");
// // textNode.nodeValue = textEl.props.nodeValue;
// // dom.append(textNode);

// function render(el, container) {
//   const dom =
//     el.type === "TEXT_ELEMENT"
//       ? document.createTextNode("")
//       : document.createElement(el.type);

//   // id class
//   Object.keys(el.props).forEach((key) => {
//     if (key !== "children") {
//       dom[key] = el.props[key];
//     }
//   });
//   const children = el.props.children;
//   children.forEach((child) => {
//     render(child, dom);
//   });

//   container.append(dom);
// }

// // const textEl = createTextNode("app");
// // const App = createElement("div", { id: "app" }, textEl);

// const ReactDOM = {
//   createRoot(container) {
//     return {
//       render(App) {
//         render(App, container);
//       },
//     };
//   },
// };
import ReactDOM from "./core/ReactDom.js";
import App from "./App.js";
ReactDOM.createRoot(document.querySelector("#root")).render(App);
