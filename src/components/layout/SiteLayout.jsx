import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import ScrollToTop from "../../app/ScrollToTop";
import ScrollProgress from "../ui/ScrollProgress";
import PageTransition from "../ui/PageTransition";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[var(--bg)] font-sans text-[var(--fg)]">
      <ScrollToTop />
      <ScrollProgress />
      <Nav />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </div>
  );
}
