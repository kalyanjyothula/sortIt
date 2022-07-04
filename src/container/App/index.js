import React from "react";
// import { useDispatch } from "react-redux";
// import { getUser } from "./reducer";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUser());
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
