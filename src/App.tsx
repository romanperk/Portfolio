import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import AppRoutes from "./Routes";

export default function Example() {
  return (
    <BrowserRouter>
      <div id="app" className="isolate text-white">
        <div aria-hidden="true" className="aurora-effect" />
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
