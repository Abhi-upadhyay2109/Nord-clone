import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom"; 

export const RequiredAuth = ({ children }) => {
  const signInState = useSelector((state) => state.Data.signInData.signInState);
  const location = useLocation();

  console.log("Auth Status:", signInState); // ✅ Debugging
  if (signInState) return children;
  else return <Navigate to="/signin" state={{ from: location }} replace />;
};