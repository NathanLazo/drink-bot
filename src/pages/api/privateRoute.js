import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";

function PrivateRoute({ children }) {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!user) {
    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    history.push("/login");
    return null;
  }

  // Si el usuario está autenticado, renderiza el contenido del componente
  return children;
}

export default PrivateRoute;
