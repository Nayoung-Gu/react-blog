import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/page/MainPage";
import PostView from "./components/page/PostView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/post-view" element={<PostView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
