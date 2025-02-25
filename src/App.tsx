import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import AppRoutes from "./Routes";
import { Analytics } from "@vercel/analytics/react";

export default function Example() {
  return (
    <BrowserRouter>
      <div id="app" className="isolate text-white">
        <div aria-hidden="true" className="aurora-effect" />
        <NavBar />
        <AppRoutes />
        <Analytics />
      </div>
    </BrowserRouter>
  );
}
