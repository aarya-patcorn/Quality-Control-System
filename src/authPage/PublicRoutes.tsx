import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function PublicRoutes({ children }: Props) {
  let user = null;

  try {
    const storedUser = localStorage.getItem("user");
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch {
    user = null;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PublicRoutes;