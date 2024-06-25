import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import PageLayout from "./PageLayout";
import { auth } from "./firebase/firebase";

function App() {
  const [authUser] = useAuthState(auth);
  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route
          path="/:username"
          element={authUser ? <ProfilePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/about"
          element={authUser ? <AboutPage /> : <Navigate to="/auth" />}
        />
      </Routes>
    </PageLayout>
  );
}

export default App;
