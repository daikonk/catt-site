import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.tsx";

const App = () => {
  return (
    <div className="flex flex-row justify-center text-white bg-[#111313] overflow-auto">
      <div className="sm:w-[600px] w-[300px] h-screen justify-self-center text-center">
        <p className="mt-8 font-monaspice text-center text-2xl">Catt</p>
        <hr className="my-10 w-full" style={{ borderTop: "2px solid white" }} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
