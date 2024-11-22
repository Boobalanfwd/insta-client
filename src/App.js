import { BrowserRouter as Router } from "react-router-dom";
import SideNav from "./components/SideNav";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <div className="sm:w-64 w-auto flex flex-col sticky top-0 h-screen overflow-y-auto bg-white shadow-md">
          <SideNav />
        </div>

        <div className="flex-1 bg-gray-100 overflow-y-auto">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
