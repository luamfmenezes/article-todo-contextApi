import React from "react";
import { TodoProvider } from "./hooks/todo";

import Home from "./pages/Home";

function App() {
  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  );
}

export default App;
