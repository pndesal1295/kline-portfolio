import { Route, Routes } from "react-router-dom";
import SiteLayout from "../components/layout/SiteLayout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProjectsPage from "../pages/ProjectsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
