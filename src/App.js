import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import PostView from "./components/pages/PostView";

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
