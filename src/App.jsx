import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import { LayoutAuth } from "./layouts/LayoutAuth";
import { LayoutAdmin } from "./layouts/LayoutAdmin";

// Page auth
import { Register } from "./pages/auth/Register";
import { ForgetPassword } from "./pages/auth/ForgetPassword";
import { Login } from "./pages/auth/Login";

// Page admin
import { Home } from "./pages/admin/Home";
import { Chat } from "./pages/admin/Chat";
import { Profile } from "./pages/admin/Profile";
import { Suport } from "./pages/admin/Suport";

// Page Error
import { Error404 } from "./pages/Error404";

// Firebase
import { useFirebaseApp } from "reactfire";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);


  return (
    <BrowserRouter>
        <Routes>
        {/* Ruta de autenticación como ruta base */}
        <Route path="/" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget-pass" element={<ForgetPassword />} />
        </Route>

        {/* Rutas de administración */}

        <Route path="/admin/*" element={<ProtectedRoute><LayoutAdmin /></ProtectedRoute>}>
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
          <Route path="suport" element={<ProtectedRoute><Suport /></ProtectedRoute>} />
        </Route>


        {/* Página de error 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
