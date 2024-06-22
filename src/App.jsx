import React from "react";
import Footer from "./Components/Footer";
import Jobseekers from "./Pages/Jobseekers";
import { Route, Routes } from "react-router-dom";
import Userdetail from "./Pages/Userdetail";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/jobseekers/" element={<Jobseekers/>} />
        <Route path="jobseekers/users/:id" element={<Userdetail/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
