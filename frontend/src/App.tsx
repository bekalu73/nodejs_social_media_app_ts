import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Profile from "./pages/profile/Profile";

import Profile from "./pages/profile/Profile";

// import Register from "./pages/register/Register";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
};

export default App;
