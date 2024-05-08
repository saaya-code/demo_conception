import { useState } from "react";
import SignInUp from "./components/SignInUp";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <SignInUp />
    </>
  );
}

export default App;
