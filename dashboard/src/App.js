import "./app.css";

import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./context/auth/AuthContext";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import Organizations from "./pages/organizations/Organizations";
import Campaigns from "./pages/campaigns/Campaigns";
import Settings from "./pages/settings/Settings";

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organizations"
            element={
              <ProtectedRoute>
                <Organizations />
              </ProtectedRoute>
            }
          />
          <Route
            path="/campaigns"
            element={
              <ProtectedRoute>
                <Campaigns />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={isAuth ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
