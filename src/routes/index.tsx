import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../components/Navigation";
import {
  Authentication,
  CurrentUserProfilePage,
  NewsFeedPage,
} from "./elements";
import { useAuth } from "../providers/userAuthentication";
import { PATHS } from "../constants/paths";

// Wrapper for private routes
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={PATHS.AUTHENTICATION} replace />
  );
};

function CustomReactRouter() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div>
        {isAuthenticated && <Navbar />}
        <Routes>
          {/* Public Route */}
          <Route path={PATHS.AUTHENTICATION} element={<Authentication />} />

          {/* Protected Routes */}
          <Route
            path={PATHS.NEWS_FEED}
            element={
              <PrivateRoute>
                <NewsFeedPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/create-post"
            element={
              <PrivateRoute>
                <div>Create Post</div>
              </PrivateRoute>
            }
          />

          <Route
            path={PATHS.CURRENT_USER_PROFILE}
            element={
              <PrivateRoute>
                <CurrentUserProfilePage />
              </PrivateRoute>
            }
          />

          {/* Catch-All */}
          <Route
            path="*"
            element={<Navigate to={PATHS.AUTHENTICATION} replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default CustomReactRouter;
