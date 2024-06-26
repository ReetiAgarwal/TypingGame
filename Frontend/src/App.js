import React, { useContext } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Demo from './screens/Demo/Demo';
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
// import Typing7 from "./screens/Typing7";
import { AuthContext } from "./context/AuthContext";
import Leaderboard from "./screens/Leaderboard/Leaderboard";
import Single from "./screens/Single/Single";

export default function () {
  const {user} = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Login" element={user? <Navigate to="/" /> : <Login/>}/>
          <Route exact path="/Signup" element={user? <Navigate to="/" /> : <Signup/>}/>
          <Route exact path="/Demo" element={<Demo/>}/>
          <Route exact path="/single" element={<Single/>}/>
          <Route exact path="/Leaderboard" element={<Leaderboard/>}/>
          {/* <Route exact path="/typing" element={<Typing7/>}/> */}
          {/* <Route exact path="/Typing" element={<Typing5/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}
