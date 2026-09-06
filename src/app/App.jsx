import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

export default function App() {
  const Router = import.meta.env.VITE_ROUTER_MODE === "browser" ? BrowserRouter : HashRouter;

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
