import React from "react";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { Profile } from "./pages/profilePage/Profile";
import EditProfile from "./pages/profilePage/EditProfile";
import ChangePassword from "./pages/profilePage/ChangePassword";
import { EditProfilePage } from "./pages/profilePage/EditProfilePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout></Layout>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/profile/editprofile" element={<EditProfile />}>
            <Route path="EditProfilePage" element={<EditProfilePage/>}></Route>
            <Route path="changepassword" element={<ChangePassword/>}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
