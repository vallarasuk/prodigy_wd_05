import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Entertainment from "./Components/Entertainment";
import Education from "./Components/Education";
import Tourism from "./Components/Tourism";
import Food from "./Components/Food";
import Business from "./Components/Business";
import Home from "./Components/Home";

const topics = [
  { path: "/business", name: "Business", component: Business },
  { path: "/entertainment", name: "Entertainment", component: Entertainment },
  { path: "/education", name: "Education", component: Education },
  { path: "/tourism", name: "Tourism", component: Tourism },
  { path: "/food", name: "Food", component: Food },
  { path: "/", name: "Home", component: Home },
];

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {topics.map((topic, index) => (
            <Route
              key={index}
              path={topic.path}
              element={<topic.component />}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default App;
