import Header from "./components/Header/Header";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage/Homepage";
import UploadPage from "./page/UploadPage/UploadPage";
import PageNotFound from "./page/PageNotFound/PageNotFound"

function App() {

  function searchEventHandler(event) {
    event.preventDefault();
  }


  return (
    <BrowserRouter>
      <Header searchEventHandler={searchEventHandler} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Upload" element={<UploadPage />} />
        <Route path="/video/:vidId" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
