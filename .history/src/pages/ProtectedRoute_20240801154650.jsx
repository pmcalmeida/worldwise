function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return children;
}

export default ProtectedRoute;
