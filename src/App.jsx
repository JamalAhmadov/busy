import React from "react";
import Footer from "./Components/Footer";
import Jobseekers from "./Pages/Jobseekers";
import { Route, Routes } from "react-router-dom";
import Userdetail from "./Pages/Userdetail";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Userpages/Profile";
import Settings from "./Pages/Userpages/Settings";
import Bookmarks from "./Pages/Userpages/Bookmarks";
import Information from "./Pages/Userpages/Information";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/jobseekers" element={<Jobseekers />} />
        <Route path="jobseekers/users/:id" element={<Userdetail />} />
        <Route path="*" element={<NotFound />} />

        {/* Yeni */}

        <Route path="/dashboard/profile" element={<Profile />}>
          <Route path="" element={<Information />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
