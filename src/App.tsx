import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Notfound from "./components/Notfound";

// 2. "/main": 메인 페이지 (임시)
// 2. "/signup": 회원가입을 하는 Signup 페이지

function App() {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;