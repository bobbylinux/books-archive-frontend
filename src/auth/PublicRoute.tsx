import { getToken } from "@/services/tokenService";
import { Navigate } from "react-router-dom";

export default function PublicRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getToken();

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
