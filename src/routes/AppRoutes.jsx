import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import CreatePost from "../components/CreatPost";
import EditPost from "../components/EditPost";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/add" element={<CreatePost />} />
      <Route path="/post/edit/:id" element={<EditPost />} />
    </Routes>
  );
};

export default AppRoutes;
