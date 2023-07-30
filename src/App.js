import Header from "./components/Header/Header";
import VideoSection from "./components/VideoSection/VideoSection";
import "./App.scss";
import VideoDescrition from "./components/VideoDescription/VideoDescription";
import CommentingForm from "./components/CommentingForm/CommentingForm";
import CommentEl from "./components/CommentEl/CommentEl";
function App() {
  return (
    <>
      <Header />
      <VideoSection />
      <VideoDescrition />
      <Body />
    </>
  );
}

export default App;
