import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="dark  h-screen cursor-default">
      <Outlet />
      <Toaster
        toastOptions={{
          className: "font-semibold tracking-wide",
          duration: 5000,
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default App;
