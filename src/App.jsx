import "./App.css";
import Topbar from "./nav/Topbar";
import Sidebar from "./nav/Sidebar";
import ListInvoices from "./pages/ListInvoices";
import CreateInvoices from "./pages/CreateInvoices";
import Details from "./pages/Details";
import Preview from "./pages/Preview";
import "@fontsource/inter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className=" flex h-full w-full pl-2 border-r-2">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="others bg-slate-50">
          <Routes>
            <Route exact path="/" element={<ListInvoices />} />
            <Route path="/create" element={<CreateInvoices />} />
            <Route path="/details" element={<Details />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
