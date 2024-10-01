import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="dark  h-screen cursor-default">
      <Outlet />
      <Toaster />
    </div>
  );
}

export default App;
