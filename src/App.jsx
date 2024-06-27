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
import EProfile from "./Pages/Employerpages/Profile";
import ESettings from "./Pages/Employerpages/Settings";
import Emlposts from "./Pages/Employerpages/Emlposts";
import EInformation from "./Pages/Employerpages/Information";
import EPost from "./Pages/Employerpages/EmployerPost";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/jobseekers" element={<Jobseekers />} />
        <Route path="jobseekers/users/:id" element={<Userdetail />} />
        <Route path="*" element={<NotFound />} />

        {/* Yeni */}

        <Route path="/dashboard/jobseeker/profile" element={<Profile />}>
          <Route path="" element={<Information />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/dashboard/employer/profile" element={<EProfile />}>
          <Route path="" element={<EInformation />} />
          <Route path="post" element={<EPost />} />
          <Route path="emlposts" element={<Emlposts />} />
          <Route path="settings" element={<ESettings />} />
        </Route>
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
