import Header from "./components/Header/Header";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage";
import UploadPage from "./page/UploadPage";

function App() {

  function searchEventHandler(event) {
    event.preventDefault();
    console.log("test sub");
  }


  return (
    <BrowserRouter>
      <Header searchEventHandler={searchEventHandler} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Upload" element={<UploadPage />} />
        <Route path="/video/:selectedVid" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
