import MainDash from "./components/Main";
import Sidebar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Sidebar />
        <MainDash />
      </div>
    </>
  );
}

export default App;
