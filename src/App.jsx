// client/src/App.jsx
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TiresPage from "./pages/TiresPage";
import TiresForm from "./pages/TiresForm";
import WelcomePage from "./pages/WelcomePage";
import InvalidPage from "./pages/InvalidPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/llantas" element={<TiresPage />} />
        <Route path="/nuevallanta" element={<TiresForm />} />
        <Route path="/Bienvenido" element={<WelcomePage />} />
        <Route path="/Invalido" element={<InvalidPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
