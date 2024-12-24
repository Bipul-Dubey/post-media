import { Home, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { useAuth } from "../../providers/userAuthentication";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <nav className="bg-white border-b fixed w-full top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold">TakJhak</h1>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Home
                className="w-6 h-6"
                onClick={() => navigate(PATHS.NEWS_FEED)}
              />
            </button>
            {/* <button className="p-2 hover:bg-gray-100 rounded-full">
              <PlusSquare className="w-6 h-6" />
            </button> */}
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={() =>
                navigate(
                  `${PATHS.CURRENT_USER_PROFILE}`.replace(":userId", "12345")
                )
              }
            >
              <User className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <LogOut
                className="w-6 h-6"
                onClick={() => {
                  logout();
                  navigate(PATHS.AUTHENTICATION);
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
