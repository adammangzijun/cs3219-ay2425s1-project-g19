import "./css/main.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashBoard from "./pages/DashBoard";
import AddQuestion from "./pages/AddQuestion";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/add" element={<AddQuestion />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;