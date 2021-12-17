import { Navigate, Outlet } from "react-router-dom";

export default function PrivateAmin() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

function useAuth() {
  return true;
}
