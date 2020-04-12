import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./pages/TodoList";
import store from "./store";
import { Provider } from "react-redux";
import "./assets/css/index.css";

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
