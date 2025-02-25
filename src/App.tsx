import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import AppRoutes from "./Routes";

export default function Example() {
  return (
    <BrowserRouter>
      <div
        id="app"
        className="isolate bg-black text-white min-h-screen w-full h-full"
      >
        <div aria-hidden="true" className="aurora-effect blur-3xl" />
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
